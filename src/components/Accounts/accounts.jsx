import React, { useContext } from 'react';
import AccountForm from './account_form.jsx';
import { AccountContext } from '../../reducers/accounts_reducer';

const AccountsIndex = () => {
  const [state, dispatch] = useContext(AccountContext);

  return (
    <>
      <h1>My Accounts</h1>
      <h2>Current Accounts</h2>
      <ul>
        {Object.values(state).map((account, idx) => (
          <li key={idx}>{account.title} - {account.type}</li>
        ))}
      </ul>
      <button>Add Account</button>
      <AccountForm />
    </>
  );
};

export default AccountsIndex;
