import React, { useEffect, useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa';
import api from '../../services/api';
import { Container } from './styles';
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
  console.log(
    usersData.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
  );
  return (
    <>
      <Container>
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
