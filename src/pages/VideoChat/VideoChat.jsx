import React, { useState, useCallback, useEffect } from "react";

import Video from "twilio-video";

import Lobby from "../../components/Lobby/Lobby";
import Room from "../../components/Room/Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setConnecting(true);
      const data = await fetch(
        "https://twillo-server.herokuapp.com/video/token",
        {
          method: "POST",
          body: JSON.stringify({
            identity: username,
            room: roomName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      Video.connect(data.token, {
        name: roomName,
      })
        .then((newRoom) => {
          setConnecting(false);
          setRoom(newRoom);
        })
        .catch((err) => {
          console.log(err);
          setConnecting(false);
        });
    },
    [roomName, username]
  );

  const handleLogout = useCallback(() => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          trackPub.track.stop();
        });
        prevRoom.disconnect();
      }
      return null;
    });
  }, []);

  useEffect(() => {
    if (room) {
      const tidyUp = (event) => {
        if (event.persisted) {
          return;
        }
        if (room) {
          handleLogout();
        }
      };
      window.addEventListener("pagehide", tidyUp);
      window.addEventListener("beforeunload", tidyUp);
      return () => {
        window.removeEventListener("pagehide", tidyUp);
        window.removeEventListener("beforeunload", tidyUp);
      };
    }
  }, [room, handleLogout]);

  if (room) {
    return <Room roomName={roomName} room={room} handleLogout={handleLogout} />;
  }
  return (
    <Lobby
      username={username}
      roomName={roomName}
      handleUsernameChange={handleUsernameChange}
      handleRoomNameChange={handleRoomNameChange}
      handleSubmit={handleSubmit}
      connecting={connecting}
    />
  );
};

export default VideoChat;
