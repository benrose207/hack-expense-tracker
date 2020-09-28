import React, { useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { DeleteButton } from '../Util_Components/buttons.jsx';
import { AppContext } from '../../reducers/store';
import CategoryForm from './categories_form.jsx';
import ExpensesTable from '../Expenses/expenses_table.jsx';

const CategoriesIndex = () => {
  const [state, dispatch] = useContext(AppContext);

  const confirmDeleteMessage = 'Are you sure you want to delete this category? Deleting this will also delete any expenses filed under this category';

  const getData = () => (
    Object.values(state.categories)
  );

  const data = getData();

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Type',
        accessor: 'color',
        Cell: ({ cell: { value } }) => (
          <div
            style={{ backgroundColor: value, height: '1.6rem', borderRadius: '6px' }}>
            </div>
        ),
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ cell: { value }, row }) => (
          <>
            <DeleteButton id={value} type='DELETE_CATEGORY' message={confirmDeleteMessage} />
            <span {...row.getToggleRowExpandedProps()}>
              <FontAwesomeIcon icon={faEdit} className="secondary-button"/>
            </span>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <h1>My Categories</h1>
      <CategoryForm state={state} dispatch={dispatch}/>
      <ExpensesTable
        columns={columns}
        data={data}
        state={state}
        dispatch={dispatch}
        parent="Cat"
      />
    </>
  );
};

export default CategoriesIndex;
