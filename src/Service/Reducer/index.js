

import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
     contactReducer  ,
     authReducer,
     //  AdminReducer
});

export default rootReducer; 
