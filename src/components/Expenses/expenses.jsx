import React, { useContext } from 'react';
import { AppContext } from '../../reducers/store';
import ExpenseForm from './expense_form.jsx';
import ExpensesTable from './expenses_table.jsx';

const Expenses = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <>
      <h1>Expense Report</h1>
      <h2>New Expense</h2>
      <ExpenseForm state={state} dispatch={dispatch} />
      <h2>All Expenses</h2>
      <ExpensesTable state={state} dispatch={dispatch} />
    </>
  );
};

export default Expenses;
