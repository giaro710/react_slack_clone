import React, { CreateContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initilState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initilState)}>
    {children}
  </StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
