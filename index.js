/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Root } from "native-base";
import SignUp from "./app/screens/SignUp/component";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { configureStore } from "./app/store";

const store = configureStore();

const App = () => (
    <Root>
        <Provider store={store}>
            <SignUp />
        </Provider>
    </Root>
);

AppRegistry.registerComponent(appName, () => App);
