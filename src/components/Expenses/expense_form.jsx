import React, { useState } from 'react';

const ExpenseForm = ({ state, dispatch, id }) => {
  const accounts = state.accounts ? Object.values(state.accounts) : [];
  const categories = state.categories ? Object.values(state.categories) : [];
  const currExpense = state.expenses[id];

  const [amount, setAmount] = useState(currExpense ? currExpense.amount : 0);
  const [date, setDate] = useState(currExpense ? currExpense.date : '');
  const [account, setAccount] = useState(currExpense ? currExpense.account : '');
  const [category, setCategory] = useState(currExpense ? currExpense.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        amount,
        date,
        account,
        category,
        id: currExpense ? currExpense.id : new Date().valueOf(),
      },
    });

    setAmount(0);
    setDate('');
    setAccount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-input">
        <label htmlFor="expense-date">Date</label>
        <input
          type="date"
          id="expense-date"
          required
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>

      <div className="form-input">
        <label htmlFor="expense-amount">Amount</label>
        <input
          type="number"
          id="expense-amount"
          required
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>

      <div className="form-input">
        <label htmlFor="expense-category">Category</label>
        <select
          id="expense-account"
          required
          value={account}
          onChange={(event) => setAccount(event.target.value)}
        >
          <option value="">-Select Account-</option>
          {accounts.map((acct) => (
            <option key={acct.id} value={acct.id}>{acct.title}</option>
          ))}
        </select>
      </div>

      <div className="form-input">
        <label htmlFor="expense-account">Account</label>
        <select
          id="expense-category"
          required
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">-Select Category-</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <button>{currExpense ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ExpenseForm;
