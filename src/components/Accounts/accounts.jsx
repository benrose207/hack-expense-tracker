import React, { useContext } from 'react';
import AccountForm from './account_form.jsx';
import { AppContext } from '../../reducers/store';
import { DeleteButton } from '../Util_Components/buttons.jsx';

const AccountsIndex = () => {
  const [state] = useContext(AppContext);

  const confirmDeleteMessage = 'Are you sure you want to delete this account? Deleting this will also delete any expenses filed under this account';

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
                <DeleteButton id={account.id} type="DELETE_ACCOUNT" message={confirmDeleteMessage}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AccountsIndex;
