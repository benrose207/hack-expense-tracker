import React, { useReducer, createContext } from "react";

export const AccountContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  let newState = { ...state};
  switch (action.type) {
    case 'ADD_ACCOUNT':
      const uniqueId = new Date().valueOf();
      newState[uniqueId] = action.payload;
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
