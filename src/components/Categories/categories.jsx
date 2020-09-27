import React, { useContext } from 'react';
import CategoryForm from './categories_form.jsx';
import { AppContext } from '../../reducers/store';
import { DeleteButton } from '../Util_Components/buttons.jsx';

const CategoriesIndex = () => {
  const [state] = useContext(AppContext);

  const confirmDeleteMessage = 'Are you sure you want to delete this category? Deleting this will also delete any expenses filed under this category';

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
                <DeleteButton id={category.id} type="DELETE_CATEGORY" message={confirmDeleteMessage}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesIndex;
