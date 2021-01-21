import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.isLocal ? "auto" : "250px !important")};
  min-width: 250px;
  max-width: 370px;
  background: ${(props) => (props.isLocal ? "#C3D435" : "#179A7B")};
  padding: 10px;
  border-radius: 6px;
  display: inline-block;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  h3 {
    text-align: center;
    padding-bottom: 5px;
    color: ${(props) => (props.isLocal ? "auto" : "#ffffff")};
  }
  video {
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
    transform: scaleX(-1);
  }
`;

export const ActionButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  button {
    margin: 10px;
    margin-bottom: 0px;
    width: 60px;
    height: 60px;
    background: #ffffff;
    border-radius: 60px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
  }
`;
