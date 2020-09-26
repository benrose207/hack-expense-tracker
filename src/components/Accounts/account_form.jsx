import React, { useState, useContext } from 'react';
import { AppContext } from '../../reducers/store';

const AccountForm = () => {
  const [state, dispatch] = useContext(AppContext);
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
    <form onSubmit={handleSubmit} className="form">
      <div className="form-labels">
        <label htmlFor="account-title">Title</label>
        <label htmlFor="account-type">Type</label>
      </div>

      <div className="form-inputs">
        <input
          type="text"
          id="account-title"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)} />

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
        <button>Add</button>
      </div>
    </form>
  );
};

export default AccountForm;
