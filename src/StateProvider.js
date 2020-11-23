import React, { createContext, useContext, useReducer } from 'react'

// Prepare the datalayer
export const StateContext = createContext();

// wrap our app and provide the Data layer  
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// pull the information from datalayer
export const useStateValue = () => useContext(StateContext);
