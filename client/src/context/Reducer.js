const initialState = {
   user: null
};

function reducer(state = initialState, { type, payload}) {

   // based on 'type' of action, mutate state and return new state.
   switch(type) {
   
      case "LOGIN": {
         return {
            ...state, user: payload
         }
      }

      case "LOGOUT": {
         return {...state, user: null}
      }

      default: {
         return state;
      }
   }
}

export { initialState, reducer };