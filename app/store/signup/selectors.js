import R from "ramda";

export const selectCodeRequestData = state =>
    R.path(state, ["signup", "codeRequest", "data"]);
export const selectCodeRequestError = state =>
    R.path(state, ["signup", "codeRequest", "error"]);
export const selectCodeRequestPending = state =>
    R.path(state, ["signup", "codeRequest", "data"]);
export const selectCodeVerificationData = state =>
    R.path(state, ["signup", "codeVerification", "data"]);
export const selectCodeVerificationError = state =>
    R.path(state, ["signup", "codeVerification", "error"]);
export const selectCodeVerificationPending = state =>
    R.path(state, ["signup", "codeVerification", "data"]);
