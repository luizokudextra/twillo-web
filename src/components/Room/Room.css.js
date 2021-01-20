import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  h1 {
    margin-bottom: 1em;
    text-align: center;
    color: #ffffff;
  }
  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const SignOutButton = styled.button`
  background: #ff81b5;
  color: #fff;
  font-size: 16px;
  padding: 0.4em;
  border-radius: 6px;
  border: 1px solid transparent;
  width: 30%;
  height: 40px;
  font-weight: bold;
  margin-top: 10px;
  &:hover {
    filter: brightness(130%);
    cursor: pointer;
  }
`;

export const RemoteParticipants = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 2em 2em;
`;

export const LocalParticipant = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;
