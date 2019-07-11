import { createRequestInstance, watchRequests } from "redux-saga-requests";
import { createDriver as createMockDriver } from "redux-saga-requests-mock";
import { REQUEST_SMS_CODE, VERIFY_SMS_CODE } from "./constants";

export default function* signUpSaga() {
    yield createRequestInstance({
        driver: createMockDriver({
            [REQUEST_SMS_CODE]: requestConfig => {
                const phoneNumber = requestConfig.url.split("/")[3];
                if (phoneNumber === "0600000000") return { status: 200 };

                throw { status: 404 };
            },
            [VERIFY_SMS_CODE]: requestConfig => {
                const code = requestConfig.url.split("/")[3];
                if (code === "8888") return { status: 200 };

                throw { status: 404 };
            }
        })
    });
    yield watchRequests();
}
