import React, {createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const StateContext = createContext();
//will explain later wrap our app and provide the data layer
export const StateProvider= ({reducer,initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}

    </StateContext.Provider>
);
//pull information form the data layer
export const useStateValue = () => useContext(StateContext);

