import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa';
import api from '../../services/api';
import { Container, List, ListItem } from './styles';
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

export default function Main() {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState();
  useEffect(() => {
    api
      .get('/collaborator')
      .then(res => {
        setUsersData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const sliced = usersData.slice(
      (currentPage - 1) * 10,
      (currentPage - 1) * 10 + 10
    );

    setCurrentUsers(sliced);
  }, [usersData, currentPage]);

  return (
    <>
      <Container>
        <List>
          {currentUsers &&
            currentUsers.map(item => {
              return (
                <ListItem
                  key={item.id}
                  as={Link}
                  to={{ pathname: '/feedbacks', aboutProps: { id: item.id } }}
                >
                  <h1>{item.name}</h1>
                  <h4>{item.company}</h4>
                  <h4>{item.role}</h4>
                </ListItem>
              );
            })}
        </List>
        <Pagination
          activePage={1}
          page={Math.ceil(usersData.length / 10)}
          prevBtn={PrevBtn}
          nextBtn={NextBtn}
          ellipsis={Ellipsis}
          onChange={setCurrentPage}
        />
      </Container>
    </>
  );
}
