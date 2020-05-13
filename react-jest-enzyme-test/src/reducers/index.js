import {combineReducers} from 'redux'
import posts from './successReducer'
import postsReducer from './posts/reducer'

export default combineReducers({
   // success:success
   //success
   posts:postsReducer
})