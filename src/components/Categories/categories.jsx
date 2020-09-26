import React, { useContext } from 'react';
import CategoryForm from './categories_form.jsx';
import { AppContext } from '../../reducers/store';

const CategoriesIndex = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_CATEGORY',
      payload: id,
    });
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
              <td style={{ 'background-color': `${category.color}`}}></td>
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
