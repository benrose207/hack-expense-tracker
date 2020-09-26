import React, { useState, useContext } from 'react';
import { AppContext } from '../../reducers/store';

const CategoryForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CATEGORY',
      payload: { name, color, id: new Date().valueOf() },
    });

    setName('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category-name">Name</label>
      <input
        type="text"
        id="category-name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <label htmlFor="category-color">Color</label>
      <select
        id="category-color"
        required
        value={color}
        onChange={(event) => setColor(event.target.value)}
      >
        <option value="">- Choose a Color -</option>
        <option value="#e84e43"></option>
        <option value="#e89843"></option>
        <option value="#e8da43"></option>
        <option value="#43e89e"></option>
        <option value="#43cde8"></option>
        <option value="#4354e8"></option>
        <option value="#e843bc"></option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default CategoryForm;
