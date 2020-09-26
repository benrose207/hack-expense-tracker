import React, { useState, useContext } from 'react';
import { AccountContext } from '../../reducers/store';

const AccountForm = () => {
  const [dispatch] = useContext(AccountContext);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ACCOUNT',
      payload: { title, type, id: new Date().valueOf() },
    });

    setTitle('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="account-title">Title</label>
      <input
        type="text"
        id="account-title"
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)} />
      <label htmlFor="account-type">Type</label>
      <select
        id="account-type"
        required
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <option value="">--Select an Option--</option>
        <option value="cash">Cash</option>
        <option value="check">Check</option>
        <option value="credit">Credit</option>
        <option value="bank-account">Bank Account</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AccountForm;
