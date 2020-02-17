import React from 'react';
import { FaThumbsUp, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ListItem, Message, UserInputButtons } from './style';

function FeedbackItem(props) {
  const { message, onLike, id, likes, onDelete } = props;
  return (
    <ListItem>
      <Message>
        <h1>{`"${message}"`}</h1>
      </Message>
      <UserInputButtons>
        <div>
          <FaThumbsUp
            color="#10a300"
            size={24}
            onClick={() => onLike(id, likes + 1)}
          />
          <h1>{likes}</h1>
        </div>
        <FaTrashAlt color="#e00000" size={24} onClick={() => onDelete(id)} />
      </UserInputButtons>
    </ListItem>
  );
}

FeedbackItem.propTypes = {
  message: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
