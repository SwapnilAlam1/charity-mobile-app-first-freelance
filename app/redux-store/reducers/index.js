import { combineReducers } from "redux";
import { connectToMetamaskReducer } from "./metamask-connection";
import { userReducer } from "./user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    metamaskConnection:connectToMetamaskReducer

});

export default rootReducer;