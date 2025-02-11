import { combineReducers } from 'redux';
import authReducer from './slices/auth/reducer';


const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;