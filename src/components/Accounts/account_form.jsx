import React, { useState, useContext } from 'react';
import { AppContext } from '../../reducers/store';

const AccountForm = ({ state, dispatch, id }) => {
  const currAcct = state.accounts[id];
  const [title, setTitle] = useState(currAcct ? currAcct.title : '');
  const [type, setType] = useState(currAcct ? currAcct.type : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ACCOUNT',
      payload: {
        title,
        type,
        id: currAcct ? currAcct.id : new Date().valueOf(),
      },
    });

    setTitle('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-input">
        <label htmlFor="account-title">Title</label>
        <input
          type="text"
          id="account-title"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
      </div>

      <div className="form-input">
        <label htmlFor="account-type">Type</label>
        <select
          id="account-type"
          required
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="">- Select an Option -</option>
          <option value="Cash">Cash</option>
          <option value="Check">Check</option>
          <option value="Credit">Credit</option>
          <option value="Bank Account">Bank Account</option>
        </select>
      </div>

      <button>{currAcct ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AccountForm;
