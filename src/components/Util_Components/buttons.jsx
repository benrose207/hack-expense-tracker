import React, { useContext } from 'react';
import { AppContext } from '../../reducers/store';

export const DeleteButton = ({ id }) => {
  const [state, dispatch] = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};