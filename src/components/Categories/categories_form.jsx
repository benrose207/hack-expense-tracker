import React, { useState } from 'react';

const CategoryForm = ({ state, dispatch, id }) => {
  const currCat = state.categories[id];
  const [name, setName] = useState(currCat ? currCat.name : '');
  const [color, setColor] = useState(currCat ? currCat.color : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CATEGORY',
      payload: {
        name,
        color,
        id: currCat ? currCat.id : new Date().valueOf(),
      },
    });

    setName('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-input">
        <label htmlFor="category-name">Name</label>
        <input
          type="text"
          id="category-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="form-input">
        <label htmlFor="category-color">Color</label>
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
      </div>

      <button>{currCat ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default CategoryForm;
