import React from "react";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Entre em uma consulta</h2>
      <div>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="field"
            value={username}
            onChange={handleUsernameChange}
            readOnly={connecting}
            required
          />
        </label>
      </div>

      <div>
        <label htmlFor="room">
          Código da sala:
          <input
            type="text"
            id="room"
            value={roomName}
            onChange={handleRoomNameChange}
            readOnly={connecting}
            required
          />
        </label>
      </div>

      <button className="big-button" type="submit" disabled={connecting}>
        {connecting ? "Conectando..." : "Entrar"}
      </button>
    </form>
  );
};

export default Lobby;
