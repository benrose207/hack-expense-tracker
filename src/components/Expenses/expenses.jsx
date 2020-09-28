import React, { useState, useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../reducers/store';
import ExpenseForm from './expense_form.jsx';
import ExpensesTable from './expenses_table.jsx';
import { DeleteButton } from '../Util_Components/buttons.jsx';

const Expenses = () => {
  const [state, dispatch] = useContext(AppContext);
  const [acctFilterType, setAcctFilterType] = useState('');
  const [acctFilterValue, setAcctFilterValue] = useState('');
  const [catFilterType, setCatFilterType] = useState('');
  const [catFilterValue, setCatFilterValue] = useState('');

  const getFilteredResults = () => {
    const updatedResults = JSON.parse(JSON.stringify(state));
    const expenses = Object.values(updatedResults.expenses);

    for (let i = 0; i < expenses.length; i += 1) {
      if (acctFilterValue && expenses[i][acctFilterType] !== acctFilterValue) {
        delete updatedResults.expenses[expenses[i].id];
      }

      if (catFilterValue && expenses[i][catFilterType] !== catFilterValue) {
        delete updatedResults.expenses[expenses[i].id];
      }
    }

    return updatedResults;
  };

  const filteredData = acctFilterValue || catFilterValue ? getFilteredResults() : state;

  const confirmDeleteMessage = 'This will permanently delete this expense. Are you sure you want to continue?';

  const getData = () => (
    Object.values(filteredData.expenses).map((expense) => (
      Object.assign(expense, {
        categoryName: filteredData.categories[expense.category].name,
        accountName: filteredData.accounts[expense.account].title,
      })
    ))
  );

  const data = getData();

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: 'expander',
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded
              ? <FontAwesomeIcon icon={faMinusCircle} />
              : <FontAwesomeIcon icon={faPlusCircle} />}
          </span>
        ),
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ cell: { value } }) => (`$${value}`),
      },
      {
        Header: 'Category',
        accessor: 'categoryName',
      },
      {
        Header: 'Account',
        accessor: 'accountName',
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ cell: { value } }) => <DeleteButton id={value} type='DELETE_EXPENSE' message={confirmDeleteMessage}/>,
      },
    ],
    []
  );

  const noTableContent = data.length ? null : (
    <p>No expenses added yet! Make sure you've added an Account and Category before you add expenses</p>
  );

  const handleAcctFilter = (e) => {
    setAcctFilterType(e.target.dataset.type);
    setAcctFilterValue(e.target.value);
  };

  const handleCatFilter = (e) => {
    setCatFilterType(e.target.dataset.type);
    setCatFilterValue(e.target.value);
  };

  return (
    <>
      <h1>Expense Report</h1>
      <h2>New Expense</h2>
      <ExpenseForm state={state} dispatch={dispatch} />
      <h2>All Expenses</h2>
      <div>
        <h3>Filter Expenses</h3>
        <select
          id="account-select"
          data-type="account"
          onChange={handleAcctFilter}
        >
          <option value="">- Accounts -</option>
          {Object.values(state.accounts).map((acct) => (
            <option key={acct.id} value={acct.id}>{acct.title}</option>
          ))}
        </select>
        <select
          id="category-select"
          data-type="category"
          onChange={handleCatFilter}
        >
          <option value="">- Categories -</option>
          {Object.values(state.categories).map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <ExpensesTable
        columns={columns}
        data={data}
        state={filteredData}
        dispatch={dispatch}
        parent="Exp"
      />
      {noTableContent}
    </>
  );
};

export default Expenses;
