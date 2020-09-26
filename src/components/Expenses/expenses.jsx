import React, { useContext } from 'react';
import { AppContext } from '../../reducers/store';
import ExpenseForm from './expense_form.jsx';
import ExpensesTable from './expenses_table.jsx';

const Expenses = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <>
      <h1>My Expenses</h1>
      <ExpenseForm state={state} dispatch={dispatch} />
      <ExpensesTable state={state} dispatch={dispatch} />
    </>
  );
};

export default Expenses;
