import React, { useState, useEffect } from 'react';

import { FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa';
import api from '../../services/api';
import {
  Container,
  UserData,
  Description,
  ListItems,
  ListItem,
  Avatar,
} from './styles';
import Pagination from '../../components/Pagination';

const PrevBtn = props => (
  <button type="button" {...props}>
    <FaChevronLeft color="#333333" />
  </button>
);

const NextBtn = props => (
  <button type="button" {...props}>
    <FaChevronRight color="#333333" />
  </button>
);

const Ellipsis = () => (
  <span className="ellipsis">
    <FaEllipsisH color="#333333" />
  </span>
);

export default function Feedbacks(props) {
  const userID = props.location.aboutProps.id;
  const [userData, setUserData] = useState();
  const [userFeedbacks, setUserFeedbacks] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    api
      .get(`/collaborator/${userID}`)
      .then(res => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });

    api
      .get(`/collaborator/${userID}/feedback`)
      .then(res => {
        setUserFeedbacks(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <Container>
      <UserData>
        <Description>
          <div>
            <h1>Nome:</h1>
            <p>{userData && userData.name}</p>
          </div>
          <div>
            <h1>Empresa:</h1>
            <p>{userData && userData.company}</p>
          </div>
          <div>
            <h1>Cargo:</h1>
            <p>{userData && userData.role}</p>
          </div>
          <div>
            <h1>Criado em:</h1>
            <p>{userData && userData.createdAt}</p>
          </div>
          <div>
            <h1>ID:</h1>
            <p>{userData && userData.id}</p>
          </div>
        </Description>
        <Avatar background={userData && userData.avatar} />
      </UserData>
      <ListItems>
        {userFeedbacks &&
          userFeedbacks.map(item => {
            return (
              <ListItem>
                <h1>{item.message}</h1>
                <h1>{item.createdAt}</h1>
                <h1>{item.like}</h1>
              </ListItem>
            );
          })}
        <Pagination
          activePage={1}
          page={Math.ceil(userFeedbacks && userFeedbacks.length / 20)}
          prevBtn={PrevBtn}
          nextBtn={NextBtn}
          ellipsis={Ellipsis}
          onChange={setCurrentPage}
        />
      </ListItems>
    </Container>
  );
}
