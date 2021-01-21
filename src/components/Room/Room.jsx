import React, { useEffect, useState } from "react";

import Participant from "../Participant/Participant";
import {
  Container,
  SignOutButton,
  RemoteParticipants,
  LocalParticipant,
} from "./Room.css";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <Container>
      <h1>Sala: {roomName}</h1>

      <LocalParticipant>
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            isLocal
          />
        ) : (
          ""
        )}
      </LocalParticipant>
      {remoteParticipants.length > 0 && (
        <>
          <h2>Participantes</h2>
          <RemoteParticipants>{remoteParticipants}</RemoteParticipants>
        </>
      )}
      <SignOutButton type="button" onClick={handleLogout}>
        Sair
      </SignOutButton>
    </Container>
  );
};

export default Room;
