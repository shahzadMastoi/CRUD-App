import { combineReducers, legacy_createStore as createStore } from 'redux'
import {todoReducer} from './redux/reducers'

const rootReducer = combineReducers({todoReducer}) 
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENTION__&& window.__REDUX_DEVTOOLS_EXTENTION__())
export default store;