import React, { useContext } from 'react';
import AccountForm from './account_form.jsx';
import { AppContext } from '../../reducers/store';

const AccountsIndex = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleDelete = (id) => {
    const answer = window.confirm('Are you sure you want to delete this account? Deleting this will also delete any expenses filed under this account');

    if (answer) {
      dispatch({
        type: 'DELETE_ACCOUNT',
        payload: id,
      });
    }
  };

  return (
    <>
      <h1>My Accounts</h1>
      <AccountForm />
      <table className="table">
        <thead className="table-headers">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(state.accounts).map((account) => (
            <tr key={account.id}>
              <td>{account.title}</td>
              <td>{account.type}</td>
              <td>
                <button onClick={() => handleDelete(account.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AccountsIndex;
