import { requestsReducer } from "redux-saga-requests";
import { combineReducers } from "redux";

import { REQUEST_SMS_CODE, VERIFY_SMS_CODE } from "./constants";

const SMSCodeRequestReducer = requestsReducer({
    actionType: REQUEST_SMS_CODE
});

const SMSCodeVerificationReducer = requestsReducer({
    actionType: VERIFY_SMS_CODE
});

export default combineReducers({
    codeRequest: SMSCodeRequestReducer,
    codeVerification: SMSCodeVerificationReducer
});
