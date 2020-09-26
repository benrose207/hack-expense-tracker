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

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Account</th>
          <th>Account Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(expenses).map((expense) => (
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
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;
