import React from 'react';
import { useTable, useSortBy, useExpanded } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import ExpenseForm from './expense_form.jsx';
import AccountForm from '../Accounts/account_form.jsx';
import CategoryForm from '../Categories/categories_form.jsx';

const ExpensesTable = ({
  columns,
  data,
  state,
  dispatch,
  parent,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable({
    columns,
    data,
  }, useSortBy, useExpanded);

  return (
    <>
      <table className="table" {...getTableProps()}>
        <thead className="table-headers">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <FontAwesomeIcon icon={faCaretDown} className="table-caret"/>
                        : <FontAwesomeIcon icon={faCaretUp} className="table-caret"/> : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <React.Fragment key={idx}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {parent === 'Acct' ? (
                        <AccountForm state={state} dispatch={dispatch} id={row.cells[2].value}/>
                      ) : parent === 'Exp' ? (
                        <ExpenseForm state={state} dispatch={dispatch} id={row.cells[5].value} />
                      ) : (
                        <CategoryForm state={state} dispatch={dispatch} id={row.cells[2].value}/>)}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpensesTable;
