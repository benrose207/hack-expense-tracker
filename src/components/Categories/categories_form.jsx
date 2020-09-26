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
    <form onSubmit={handleSubmit} className="form">
      <div className="form-labels">
        <label htmlFor="category-name">Name</label>
        <label htmlFor="category-color">Color</label>
      </div>

      <div className="form-inputs">
        <input
          type="text"
          id="category-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)} />

        <select
          id="category-color"
          required
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="">- Choose a Color -</option>
          <option value="#e84e43">Red</option>
          <option value="#e89843">Orange</option>
          <option value="#e8da43">Yellow</option>
          <option value="#43e89e">Green</option>
          <option value="#43cde8">Blue</option>
          <option value="#4354e8">Purple</option>
          <option value="#e843bc">Pink</option>
        </select>
        <button>Add</button>
      </div>
    </form>
  );
};

export default CategoryForm;
