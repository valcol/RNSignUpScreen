/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import SignUp from "./app/screens/SignUp/component";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { configureStore } from "./app/store";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <SignUp />
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
