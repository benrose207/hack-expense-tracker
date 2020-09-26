import React, { useReducer, createContext } from "react";

export const AccountContext = createContext();

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
    default:
      throw new Error();
  }
};

export const AccountContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AccountContext.Provider value={[state, dispatch]}>
      {props.children}
    </AccountContext.Provider>
  );
};
