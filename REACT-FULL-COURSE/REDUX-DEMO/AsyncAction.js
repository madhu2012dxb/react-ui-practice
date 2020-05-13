const redux = require("redux");
const thunkMiddleware=require('redux-thunk').default;
const axios=require('axios');
const applyMiddleware=redux.applyMiddleware;
const createStore=redux.createStore;
const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state, action) => {
  console.log(action.type)  
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users:action.payload,
        error:''
      };
      case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users:[],
        error:action.payload
      };
      default: return state;


  }
};

const fetchUsers=()=>{
 // return dispatch=>{
    return function(dispatch){
     console.log('Test')   
     dispatch(fetchUsersRequest());
     axios.get(`https://jsonplaceholder.typicode.com/users`)
     .then(response=>{
      const users=response.data.map(user=>user.id)
      dispatch(fetchUsersSuccess(users));
      })
     .catch(error=>{
        dispatch(fetchUsersFailure(error.message));  
     })


  }

}
const store=createStore(reducer,applyMiddleware(thunkMiddleware));
/*
const store=createStore(reducer);

Error: Actions must be plain objects. Use custom middleware for async actions.
    at Object.dispatch (C:\PREPERATION\REACT-FULL-COURSE\REDUX-DEMO\node_modules\redux\lib\red
*/        
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());

