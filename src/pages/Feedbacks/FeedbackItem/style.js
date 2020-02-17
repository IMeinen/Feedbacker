import styled from 'styled-components';

export const ListItem = styled.div`
  text-decoration: none;
  width: 95%;
  min-height: 150px;
  margin: 10px 0;
  color: #333;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  width: 70%;
  min-height: 140px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-all;

  h1 {
    font-size: 20px;
    overflow-wrap: break-word;
    word-break: break-all;
  }
`;

export const UserInputButtons = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin-top: 3px;
      margin-left: 10px;
    }
  }
`;
