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
      delete newState['accounts'][action.payload];
      return newState;
    case 'ADD_CATEGORY':
      newState['categories'][action.payload.id] = action.payload;
      return newState;
    case 'DELETE_CATEGORY':
      delete newState['categories'][action.payload];
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
