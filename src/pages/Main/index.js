import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoopCircleLoading } from 'react-loadingg';
import api from '../../services/api';
import { Container, List, ListItem, Title } from './styles';
import Pagination from '../../components/Pagination';

export default function Main() {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState();
  const [loading, setLoading] = useState(true);

  // get user data
  useEffect(() => {
    api
      .get('/collaborator')
      .then(res => {
        setUsersData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  // slice data to pages
  useEffect(() => {
    const sliced = usersData.slice(
      (currentPage - 1) * 10,
      (currentPage - 1) * 10 + 10
    );

    setCurrentUsers(sliced);
  }, [usersData, currentPage]);

  return (
    <>
      <Title>
        <h1>FEEDBACKER</h1>
      </Title>
      <Container>
        {loading && <LoopCircleLoading />}
        {!loading && (
          <List>
            {currentUsers &&
              currentUsers.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    as={Link}
                    to={{ pathname: '/feedbacks', aboutProps: { id: item.id } }}
                  >
                    <div>
                      <h1>Nome:</h1>
                      <p>{item.name}</p>
                    </div>
                    <div>
                      <h1>Empresa:</h1>
                      <p>{item.company}</p>
                    </div>
                    <div>
                      <h1>Cargo :</h1>
                      <p>{item.role}</p>
                    </div>
                  </ListItem>
                );
              })}
          </List>
        )}
        {!loading && (
          <Pagination
            activePage={1}
            page={Math.ceil(usersData.length / 10)}
            onChange={setCurrentPage}
          />
        )}
      </Container>
    </>
  );
}
