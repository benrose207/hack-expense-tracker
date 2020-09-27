import React, { useContext } from 'react';
import CategoryForm from './categories_form.jsx';
import { AppContext } from '../../reducers/store';

const CategoriesIndex = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleDelete = (id) => {
    const answer = window.confirm('Are you sure you want to delete this category? Deleting this will also delete any expenses filed under this category');

    if (answer) {
      dispatch({
        type: 'DELETE_CATEGORY',
        payload: id,
      });
    }
  };

  return (
    <>
      <h1>My Categories</h1>
      <CategoryForm />
      <table className="table">
        <thead className="table-headers">
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(state.categories).map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td style={{ backgroundColor: `${category.color}` }}></td>
              <td>
                <button onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesIndex;
