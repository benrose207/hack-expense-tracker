import React from 'react';

const ExpensesTable = ({ state, dispatch }) => {
  const expenses = Object.values(state.expenses);
  const { accounts, categories } = state;

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  const noTableContent = expenses.length ? null : (
    <p>No expenses added yet! Make sure you've added an Account and Category before you add expenses</p>
  );

  return (
    <>
      <table className="table">
        <thead className="table-headers">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Account</th>
            <th>Acct Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.values(expenses).map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>${expense.amount}</td>
                <td>{categories[expense.category].name}</td>
                <td>{accounts[expense.account].title}</td>
                <td>{accounts[expense.account].type}</td>
                <td>
                  <button onClick={() => handleDelete(expense.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {noTableContent}
    </>
  );
};

export default ExpensesTable;
