import React from 'react';
import { useTable, useSortBy, useExpanded } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import ExpenseForm from './expense_form.jsx';

const ExpensesTable = ({
  columns,
  data,
  state,
  dispatch,
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

  const noTableContent = data.length ? null : (
    <p>No expenses added yet! Make sure you've added an Account and Category before you add expenses</p>
  );

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
                      <ExpenseForm state={state} dispatch={dispatch} id={row.cells[5].value}/>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {noTableContent}
    </>
  );
};

export default ExpensesTable;
