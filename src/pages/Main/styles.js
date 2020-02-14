import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  height: 90vh;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const List = styled.section`
  width: 90%;
  height: 90%;
  background-color: #faf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ListItem = styled.div`
  text-decoration: none;
  width: 95%;
  height: 9%;
  color: #333;
  background-color: #33f;
`;
