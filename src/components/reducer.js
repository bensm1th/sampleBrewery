import { combineReducers } from 'redux';
import routes from '../reducers/RouterReducer';
import IncrementReducer from './IncrementReducer';

export default combineReducers({
    increment: IncrementReducer,
    routes
});
