import { createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer";

// create a context object.
const AppContext = createContext(null);

// returns the context provider.
const AppContextProvider = ({ children }) => {
   return (
      // when this context is used, the value returned would be array of 2 size -> [state, dispatch]
      <AppContext.Provider value={useReducer(reducer, initialState)}>
         {children}
      </AppContext.Provider>
   )
}

export { AppContext , AppContextProvider };