import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { LoopCircleLoading } from 'react-loadingg';
import { toast } from 'react-toastify';
import api from '../../services/api';
import {
  Container,
  UserData,
  Description,
  ListItems,
  Avatar,
  AddFeedbackContainer,
} from './styles';
import Pagination from '../../components/Pagination';

import FeedbackItem from './FeedbackItem';

export default function Feedbacks(props) {
  const { location } = props;
  const userID = location.aboutProps.id;
  const [userData, setUserData] = useState();
  const [userFeedbacks, setUserFeedbacks] = useState();
  const [currentFeedBacks, setCurrentFeedBacks] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [newFeedback, setNewFeedback] = useState('');
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);

  // get user data
  useEffect(() => {
    api
      .get(`/collaborator/${userID}`)
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  // get user feedbacks
  useEffect(() => {
    api
      .get(`/collaborator/${userID}/feedback`)
      .then(res => {
        setUserFeedbacks(res.data);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, [reload]);

  // slice data to pages
  useEffect(() => {
    const sliced = (userFeedbacks || []).slice(
      (currentPage - 1) * 20,
      (currentPage - 1) * 20 + 20
    );

    setCurrentFeedBacks(sliced);
  }, [userFeedbacks, currentPage]);

  // post new feedback
  const HandleSaveNewFeedback = () => {
    setLoading(true);
    const payload = {
      id: userID,
      message: newFeedback,
      like: 0,
    };
    api
      .post(`/collaborator/${userID}/feedback`, payload)
      .then(() => {
        setReload(!reload);
        setLoading(false);
      })
      .catch(err => {
        if (
          err.response.data ===
          'Max number of elements reached for this resource!'
        ) {
          toast.error(
            'Número máximo de feedbacks suportado pelo servidor, não é possível inserir mais feedbacks.'
          );
          setReload(!reload);
          setLoading(false);
        }
        console.error(err);
      });
  };

  // delete some feedback
  const HandleDeleteFeedback = id => {
    setLoading(true);

    api
      .delete(`/collaborator/${userID}/feedback/${id}`)
      .then(() => {
        setReload(!reload);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // put like in some feedback
  const HandleLikeFeedback = (id, like) => {
    setLoading(true);
    const payload = { like };
    api
      .put(`/collaborator/${userID}/feedback/${id}`, payload)
      .then(res => {
        setReload(!reload);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
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
            <p>
              {userData && format(parseISO(userData.createdAt), 'dd/MM/yyyy')}
            </p>
          </div>
          <div>
            <h1>ID:</h1>
            <p>{userData && userData.id}</p>
          </div>
        </Description>
        <Avatar background={userData && userData.avatar} />
      </UserData>
      <Container>
        {loading && <LoopCircleLoading />}
        {!loading && (
          <ListItems>
            <AddFeedbackContainer>
              <textarea
                type="text"
                placeholder="Insira um novo feedback"
                onChange={event => {
                  setNewFeedback(event.currentTarget.value);
                }}
              />
              <h1>Clique no botão abaixo para inserir um novo feedback</h1>
              <button type="button" onClick={() => HandleSaveNewFeedback()}>
                <FaPlus color="#fff" size={30} />
              </button>
            </AddFeedbackContainer>
            {currentFeedBacks &&
              currentFeedBacks.map(item => {
                return (
                  <FeedbackItem
                    message={item.message}
                    likes={item.like}
                    id={item.id}
                    createdAt={item.createdAt}
                    onDelete={HandleDeleteFeedback}
                    onLike={HandleLikeFeedback}
                  />
                );
              })}
            {currentFeedBacks.length > 0 && (
              <Pagination
                activePage={1}
                page={Math.ceil(userFeedbacks && userFeedbacks.length / 20)}
                onChange={setCurrentPage}
              />
            )}
          </ListItems>
        )}
      </Container>
    </>
  );
}

Feedbacks.propTypes = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
