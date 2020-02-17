import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;

  min-height: 90vh;
  background-color: #2a2d50;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 60px auto;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.section`
  width: 90%;
  min-height: 90%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ListItem = styled.div`
  text-decoration: none;
  width: 95%;
  min-height: 100px;
  margin: 10px 0;
  color: #333;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: background-color 0.5s ease;
    transition: color 0.2s ease;
    background-color: #333;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
  }

  p {
    font-size: 18px;
  }
`;

export const Title = styled.div`
  width: 70%;
  margin-left: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 112px;
    color: #fff;
  }
`;
