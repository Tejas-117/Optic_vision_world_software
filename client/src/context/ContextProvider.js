import { createContext, useReducer,useState } from "react";
import { initialState, reducer } from "./Reducer";

// create a context object.
const AppContext = createContext(null);

// returns the context provider.
const AppContextProvider = ({ children }) => {
   const [customerData , setCustomerData] = useState([]);
   const [productData, setProductData] = useState([]);
   const addCustomerData = (customer)=>{
      setCustomerData([...customerData,customer]);
   }
   const addProductData = (product) =>{
      setProductData([...productData,product]);
   }
   return (
      // when this context is used, the value returned would be array of 2 size -> [state, dispatch]
      <AppContext.Provider value={{state: useReducer(reducer, initialState),customerData,setCustomerData,addCustomerData,productData,setProductData,addProductData}}>
         {children}
      </AppContext.Provider>
   )
}

export { AppContext , AppContextProvider };