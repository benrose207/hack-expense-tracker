import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  accounts: {},
  categories: {},
  expenses: {}
};

const reducer = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'ADD_ACCOUNT':
      newState['accounts'][action.payload.id] = action.payload;
      return newState;
    case 'DELETE_ACCOUNT':
      Object.values(newState['expenses']).forEach((expense) => {
        if (parseInt(expense.account) === action.payload) delete newState['expenses'][expense.id];
      });
      delete newState['accounts'][action.payload];
      return newState;
    case 'ADD_CATEGORY':
      Object.values(newState['expenses']).forEach((expense) => {
        if (parseInt(expense.category) === action.payload) delete newState['expenses'][expense.id];
      });
      newState['categories'][action.payload.id] = action.payload;
      return newState;
    case 'DELETE_CATEGORY':
      delete newState['categories'][action.payload];
      return newState;
    case 'ADD_EXPENSE':
      newState['expenses'][action.payload.id] = action.payload;
      return newState;
    case 'DELETE_EXPENSE':
      delete newState['expenses'][action.payload];
      return newState;
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
