import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./Loginpage";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return shallow(<LoginPage />);
};

describe("testing of the Login Page App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render without error", () => {
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.length).toBe(1);
  });
  test("should not render the error message initially", () => {
    const errorComponent = findByTestAttr(wrapper, "error-component");
    expect(errorComponent.text()).toBe("");
  });
  test("should render the radio type components", () => {
    const typeComponent = findByTestAttr(wrapper, "type-component");
    expect(typeComponent.length).toBe(1);
  });
  test("should render error message when sign in button clicked", () => {
    const button = findByTestAttr(wrapper, "signin-button");
    button.simulate("click");
    const errorComponent = findByTestAttr(wrapper, "error-component");
    expect(errorComponent.text()).toBe("All the fields are required!");
  });
});
