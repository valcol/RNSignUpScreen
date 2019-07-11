import { connect } from "react-redux";
import { requestSMSCode, verifySMSCode } from "./actions";

const mapStateToProps = state => {
    return {
        state
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
