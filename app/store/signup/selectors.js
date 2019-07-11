import R from "ramda";

export const selectCodeRequestData = state =>
    R.path(["signup", "codeRequest", "data"], state);
export const selectCodeRequestError = state =>
    R.path(["signup", "codeRequest", "error"], state);
export const selectCodeRequestPending = state =>
    R.path(["signup", "codeRequest", "pending"], state);
export const selectCodeVerificationData = state =>
    R.path(["signup", "codeVerification", "data"], state);
export const selectCodeVerificationError = state =>
    R.path(["signup", "codeVerification", "error"], state);
export const selectCodeVerificationPending = state =>
    R.path(["signup", "codeVerification", "pending"], state);
