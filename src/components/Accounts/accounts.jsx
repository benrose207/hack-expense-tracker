import React, { useContext } from 'react';
import AccountForm from './account_form.jsx';
import { AccountContext } from '../../reducers/store';

const AccountsIndex = () => {
  const [state, dispatch] = useContext(AccountContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_ACCOUNT',
      payload: id,
    });
  };

  return (
    <>
      <h1>My Accounts</h1>
      <AccountForm />
      <ul>
        {Object.values(state.accounts).map((account) => (
          <li key={account.id}>
            {account.title} - {account.type}
            <button onClick={() => handleDelete(account.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AccountsIndex;
