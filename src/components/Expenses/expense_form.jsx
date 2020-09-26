import React, { useState } from 'react';

const ExpenseForm = ({ state, dispatch }) => {
  const accounts = state.accounts ? Object.values(state.accounts) : [];
  const categories = state.categories ? Object.values(state.categories) : [];

  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        amount,
        date,
        account,
        category,
        id: new Date().valueOf(),
      },
    });

    setAmount(0);
    setDate('');
    setAccount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-labels">
        <label htmlFor="expense-date">Date</label>
        <label htmlFor="expense-amount">Amount</label>
        <label htmlFor="expense-category">Category</label>
        <label htmlFor="expense-account">Account</label>
      </div>

      <div className="form-inputs">
        <input
          type="date"
          id="expense-date"
          required
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <input
          type="number"
          id="expense-amount"
          required
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <select
          id="expense-account"
          required
          value={account}
          onChange={(event) => setAccount(event.target.value)}
        >
          <option value="">-Select Account-</option>
          {accounts.map((acct) => (
            <option value={acct.id}>{acct.title}</option>
          ))}
        </select>

        <select
          id="expense-category"
          required
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">-Select Category-</option>
          {categories.map((cat) => (
            <option value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button>Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
