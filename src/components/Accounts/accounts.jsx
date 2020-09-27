import React, { useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { DeleteButton } from '../Util_Components/buttons.jsx';
import { AppContext } from '../../reducers/store';
import AccountForm from './account_form.jsx';
import ExpensesTable from '../Expenses/expenses_table.jsx';


const AccountsIndex = () => {
  const [state, dispatch] = useContext(AppContext);

  const confirmDeleteMessage = 'Are you sure you want to delete this account? Deleting this will also delete any expenses filed under this account';

  const getData = () => (
    Object.values(state.accounts)
  );

  const data = getData();

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'title',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ cell: { value }, row }) => (
          <>
            <DeleteButton id={value} type='DELETE_ACCOUNT' message={confirmDeleteMessage} />
            <span {...row.getToggleRowExpandedProps()}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <h1>My Accounts</h1>
      <AccountForm state={state} dispatch={dispatch}/>
      <ExpensesTable
        columns={columns}
        data={data}
        state={state}
        dispatch={dispatch}
        parent="Acct"
      />
    </>
  );
};

export default AccountsIndex;
