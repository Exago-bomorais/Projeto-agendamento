import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Event = styled.div`
  display: flex;
  margin: auto;
  padding: 15px;
  margin-top: -42px;
  max-width: 1400px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  button {
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 14x;
    margin-left: 144px;
    margin-top: 2.5px;
    height: 40px;
    width: 180px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid black;
    font-weight: bold;
    padding: 16px;
    background-color: #212c4f;
    color: white;
  }

  button:hover {
    color: white;
    background-color: #0e1733;
    border: 2px solid #212c4f;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input.date {
    border: 1px solid black;
    padding: 8px;
    height: 25px;
    text-align: center;
    width: 180px;
    border-radius: 4px;
  }

  input.text {
    border: 1px solid black;
    height: 25px;
    text-align: center;
    width: 124.47px;
    border-radius: 4px;
  }
`;
