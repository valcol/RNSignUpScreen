import "react-native";
import React from "react";
import { SignUp } from "../component";
import renderer from "react-test-renderer";

it("renders correctly with no props", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
});
