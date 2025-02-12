import { combineReducers } from 'redux';
import authReducer from './slices/auth/reducer';
import dashboardReducer from './slices/dashboard/reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    dashboard : dashboardReducer
});

export default rootReducer;