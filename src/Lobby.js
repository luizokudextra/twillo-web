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
      <h2>Enter a room</h2>
      <div>
        <label htmlFor="name">
          Name:
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
          Room name:
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

      <button type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Join"}
      </button>
    </form>
  );
};

export default Lobby;
