import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  min-height: 90vh;
  background-color: #2a2d50;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const UserData = styled.section`
  width: 70%;
  height: 150px;
  background-color: #2a2d50;
  margin: 20px 0;
  margin-left: 15%;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  color: #fff;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
      margin-right: 10px;
      line-height: 24px;
    }
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
  width: 80%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
`;

export const AddFeedbackContainer = styled.div`
  width: 95%;
  min-height: 150px;
  margin: 10px 0;
  color: #333;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  textarea {
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #eee;
    width: 90%;
    display: block;
    border: none;
    transition: all 0.3s;
    min-height: 100px;
    padding: 10px 20px;
    overflow-wrap: break-word;
    resize: none;
  }

  h1 {
    margin: 20px 0;
  }

  button {
    border: none;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #10a300;
    margin: 20px 0;
  }
`;
