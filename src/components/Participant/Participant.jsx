import React, { useState, useEffect, useRef } from "react";
import { FiMicOff, FiMic, FiVideoOff, FiVideo } from "react-icons/fi";

import { Container, ActionButtonContainer } from "./Participant.css";

const Participant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [isMuted, setMuted] = useState(true);
  const [isVideoOpen, setVideoOpen] = useState(false);

  const videoRef = useRef();
  const audioRef = useRef();

  const changeVideoStatus = async () => {
    if (isVideoOpen) {
      await videoTracks.forEach((track) => {
        track.disable();
      });
      setVideoOpen(false);
    } else {
      await videoTracks.forEach((track) => {
        track.enable();
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

  return (
    <Container>
      <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay muted={isMuted}>
        <track kind="captions" />
      </video>
      <audio ref={audioRef} autoPlay>
        <track kind="captions" />
      </audio>
      <ActionButtonContainer>
        <button type="button" onClick={changeAudioStatus}>
          {isMuted ? <FiMicOff size={20} /> : <FiMic size={20} />}
        </button>
        <button type="button" onClick={changeVideoStatus}>
          {isVideoOpen ? <FiVideo size={20} /> : <FiVideoOff size={20} />}
        </button>
      </ActionButtonContainer>
    </Container>
  );
};

export default Participant;
