import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  min-height: 90vh;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const UserData = styled.section`
  width: 100%;
  height: 150px;
  background-color: #faf;
  align-self: flex-start;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => `url(${props.background})  no-repeat top center`};
  background-size: cover;
`;

export const ListItems = styled.section`
  width: 50%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #faf;
`;

export const ListItem = styled.div`
  text-decoration: none;
  width: 95%;
  height: 100px;
  color: #333;
  background-color: #33f;
`;
