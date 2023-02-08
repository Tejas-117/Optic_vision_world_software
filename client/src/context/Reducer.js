
const initialState = {};

function reducer(state = initialState, { type, payload}) {

   // based on 'type' of action, mutate state and return new state.
   switch(type) {
      
      default: {
         return state;
      }
   }
}

export { initialState, reducer };