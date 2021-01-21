import React, { useState, useEffect, useRef } from "react";
import { FiMicOff, FiMic, FiVideoOff, FiVideo } from "react-icons/fi";

import { createLocalVideoTrack } from "twilio-video";

import { Container, ActionButtonContainer } from "./Participant.css";

const Participant = ({ participant, isLocal }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [isMuted, setMuted] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(true);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((newVideoTracks) => [...newVideoTracks, track]);
      } else if (track.kind === "audio") {
        setAudioTracks((newAudioTracks) => [...newAudioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((newVideoTracks) =>
          newVideoTracks.filter((v) => v !== track)
        );
      } else if (track.kind === "audio") {
        setAudioTracks((newAudioTracks) =>
          newAudioTracks.filter((a) => a !== track)
        );
      }
    };

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  const changeVideoStatus = async () => {
    if (isVideoOpen) {
      await participant.videoTracks.forEach(async (publication) => {
        await publication.track.stop();
        await publication.unpublish();
      });
      setVideoOpen(false);
    } else {
      createLocalVideoTrack()
        .then((localVideoTrack) => {
          return participant.publishTrack(localVideoTrack);
        })
        .then(() => {
          setVideoTracks(trackpubsToTracks(participant.videoTracks));
        });
      setVideoOpen(true);
    }
  };

  const changeAudioStatus = async () => {
    if (!isMuted) {
      await audioTracks.forEach((track) => {
        track.disable();
      });
      setMuted(true);
    } else {
      await audioTracks.forEach((track) => {
        track.enable();
      });
      setMuted(false);
    }
  };
  return (
    <Container isLocal={isLocal}>
      <h3>{participant.identity}</h3>

      <video ref={videoRef}>
        <track kind="captions" />
      </video>

      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
      {isLocal && (
        <ActionButtonContainer>
          <button type="button" onClick={changeAudioStatus}>
            {isMuted ? <FiMicOff size={20} /> : <FiMic size={20} />}
          </button>
          <button type="button" onClick={changeVideoStatus}>
            {isVideoOpen ? <FiVideo size={20} /> : <FiVideoOff size={20} />}
          </button>
        </ActionButtonContainer>
      )}
    </Container>
  );
};

export default Participant;
