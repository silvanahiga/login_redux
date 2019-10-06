import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initialStore = {
  name: "silvana",
  email: "contacto@courseit.com.ar",
  password: "courseit123",
  logged: false

}



//reducer//
export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
    return Object.assign({}, state,{
      [action.name]: action.value,
      
    });
    case "CHECK_LOGG":
    return Object.assign({}, state,{
      logged:true
    });
    case "RESET_LOGG":
    return {
      logged: false,
    };
    default:
      return state;

  }
}

//action
export const inputChange = (email, name) => dispatch => {
  return dispatch({
    type:"INPUT_CHANGE",
    value:email,
    name:name

  })
}

export const logginCheck = () => dispatch => {
  return dispatch({
    type:"CHECK_LOGG",
    
  })
}

export const resetLoggin = () => dispatch => {
  return dispatch({
    type:"RESET_LOGG"
  })
}



export function initializeStore() {
  return createStore(reducer, initialStore, applyMiddleware(thunkMiddleware))
}