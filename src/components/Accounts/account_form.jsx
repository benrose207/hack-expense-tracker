import React, { useState, useContext } from 'react';
import { AccountContext } from '../../reducers/accounts_reducer';

const AccountForm = () => {
  const [state, dispatch] = useContext(AccountContext);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ACCOUNT',
      payload: { title, type },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="account-title">Title</label>
      <input type="text" id="account-title" onChange={(event) => setTitle(event.target.value)}/>
      <label htmlFor="account-type">Type</label>
      <select id="account-type" onChange={(event) => setType(event.target.value)}>
        <option value="" defaultValue>--Select an Option--</option>
        <option value="cash">Cash</option>
        <option value="check">Check</option>
        <option value="credit">Credit</option>
        <option value="bank-account">Bank Account</option>
      </select>
      <button>Create</button>
    </form>
  )
};

export default AccountForm;
