import React, { createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

//This will wrap our app and provide the datalayer to every component of our app
export const StateProvider = ({ reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information form the data layer
export const useStateValue=()=>useContext(StateContext);