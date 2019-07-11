import { connect } from "react-redux";
import { requestSMSCode, verifySMSCode } from "./actions";
import {
    selectCodeRequestData,
    selectCodeRequestError,
    selectCodeRequestPending,
    selectCodeVerificationData,
    selectCodeVerificationError,
    selectCodeVerificationPending
} from "./selectors";

const mapStateToProps = state => {
    const isCodeRequestPending = selectCodeRequestPending(state) > 0;
    const isCodeRequestOnError = Boolean(selectCodeRequestError(state));
    const isCodeRequestOnSuccess = Boolean(selectCodeRequestData(state));
    const isCodeVerificationPending = selectCodeVerificationPending(state) > 0;
    const isCodeVerificationOnError = Boolean(
        selectCodeVerificationError(state)
    );
    const isCodeVerificationOnSuccess = Boolean(
        selectCodeVerificationData(state)
    );
    return {
        isCodeRequestPending,
        isCodeRequestOnError,
        isCodeRequestOnSuccess,
        isCodeVerificationPending,
        isCodeVerificationOnError,
        isCodeVerificationOnSuccess
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestSMSCode: phoneNumber => dispatch(requestSMSCode(phoneNumber)),
        verifySMSCode: code => dispatch(verifySMSCode(code))
    };
};

const HOC = Component =>
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Component);

export default HOC;
