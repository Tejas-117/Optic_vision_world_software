import { useContext, useEffect, useState } from 'react'
import { AppContext } from "../context/ContextProvider";
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
   const [state, _] = useContext(AppContext);

   return (
      <>
         { !state.user ? <Navigate to={'/login'} /> : children } 
      </>
   );
}

export default RequireAuth;