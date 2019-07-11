import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import signUpSaga from "./signup/sagas";
import signUpReducer from "./signup/reducers";

function* rootSaga() {
    yield fork(signUpSaga);
}

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const rootReducer = combineReducers({
        signup: signUpReducer
    });
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
