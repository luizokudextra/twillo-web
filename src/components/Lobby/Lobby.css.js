import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const FormContainer = styled.div`
  background: #ffffff;
  min-width: 350px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 30px 30px;
  form {
    max-width: 300px;
    margin: 0 auto;
  }
  h2 {
    margin-bottom: 10px;
    text-align: center;
  }
  input {
    align-self: flex-end;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #333e5a;
    margin-bottom: 10px;
  }
  button {
    background: #ff81b5;
    color: #fff;
    font-size: 16px;
    padding: 5px;
    border-radius: 6px;
    border: 1px solid transparent;
    width: 100%;
    height: 40px;
    font-weight: bold;
    margin-top: 10px;
  }
  button:hover {
    filter: brightness(130%);
    cursor: pointer;
  }
`;
