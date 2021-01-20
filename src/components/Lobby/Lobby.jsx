import React from "react";

import { Container, FormContainer } from "./Lobby.css";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>Entre em uma consulta</h2>
          <input
            placeholder="Nome"
            type="text"
            id="field"
            value={username}
            onChange={handleUsernameChange}
            readOnly={connecting}
            required
          />

          <input
            placeholder="Código da sala"
            type="text"
            id="room"
            value={roomName}
            onChange={handleRoomNameChange}
            readOnly={connecting}
            required
          />

          <button type="submit" disabled={connecting}>
            {connecting ? "Conectando..." : "Entrar"}
          </button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Lobby;
