import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  h1,
  h2 {
    margin-bottom: 10px;
    text-align: center;
    color: #ffffff;
  }
`;

export const SignOutButton = styled.button`
  background: #ff81b5;
  color: #fff;
  font-size: 16px;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid transparent;
  width: 370px;
  height: 40px;
  font-weight: bold;
  margin: 10px 0px;
  &:hover {
    filter: brightness(130%);
    cursor: pointer;
  }
`;

export const RemoteParticipants = styled.div`
  display: flex;
  padding: 10px;
  overflow-x: auto;
  max-width: 100%;
  border-radius: 6px;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

export const LocalParticipant = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
