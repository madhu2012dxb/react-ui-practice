import {combineReducers} from 'redux'
import cakeReducer from './cakes/CakeReducer'
import iceCreamReducer from './iceCreams/IceCreamReducer'
export const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
