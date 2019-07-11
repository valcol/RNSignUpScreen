import "react-native";
import React from "react";
import { SignUp } from "../component";
import renderer from "react-test-renderer";

it("renders correctly with no props", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders phone number error message", () => {
    const tree = renderer.create(<SignUp isCodeRequestOnError />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders SMS code form", () => {
    const tree = renderer.create(<SignUp isCodeRequestOnSuccess />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders SMS code error message", () => {
    const tree = renderer
        .create(<SignUp isCodeRequestOnSuccess isCodeVerificationOnError />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders SMS code success", () => {
    const tree = renderer
        .create(<SignUp isCodeRequestOnSuccess isCodeVerificationOnSuccess />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
