import {combineReducers} from 'redux';
import authReducer from './auth';
import todosReducer from './todos';

const reducer = combineReducers({
    auth: authReducer, 
    todos: todosReducer
});

export default reducer;