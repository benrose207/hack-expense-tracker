import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../reducers/store';
import ExpenseForm from './expense_form.jsx';
import ExpensesTable from './expenses_table.jsx';
import { DeleteButton } from '../Util_Components/buttons.jsx';

const Expenses = () => {
  const [state, dispatch] = useContext(AppContext);

  const getData = () => {
    return Object.values(state.expenses).map((expense) => (
      Object.assign(expense, { categoryName: state.categories[expense.category].name, accountName: state.accounts[expense.account].title })
    ));
  };

  const data = getData();

  const columns = useMemo(
    () => [
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
        Cell: ({ cell: { value } }) => <DeleteButton id={value}/>,
      },
    ],
    []
  );

  return (
    <>
      <h1>Expense Report</h1>
      <h2>New Expense</h2>
      <ExpenseForm state={state} dispatch={dispatch} />
      <h2>All Expenses</h2>
      <ExpensesTable columns={columns} data={data} dispatch={dispatch} />
    </>
  );
};

export default Expenses;
