import { REQUEST_SMS_CODE, VERIFY_SMS_CODE } from "./constants";

export const requestSMSCode = phoneNumber => ({
    type: REQUEST_SMS_CODE,
    request: { method: "post", url: `/fakeapi/send/${phoneNumber}` }
});

export const verifySMSCode = code => ({
    type: VERIFY_SMS_CODE,
    request: { method: "post", url: `/fakeapi/verify/${code}` }
});
