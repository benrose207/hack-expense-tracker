import React, { useContext } from 'react';
import { AppContext } from '../../reducers/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const DeleteButton = ({ id, type, message }) => {
  const [state, dispatch] = useContext(AppContext);

  const handleDelete = () => {
    const answer = window.confirm(message)

    if (answer) {
      dispatch({
        type,
        payload: id,
      });
    }
  };

  return (
    <button onClick={handleDelete}><FontAwesomeIcon icon={faTrashAlt}/></button>
  );
};