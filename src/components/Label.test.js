import React from "react";
import { shallow } from "enzyme";
import Label from "./Label";
import { findByTestAttr } from "../test/testUtils";

const setup = () => {
  return shallow(<Label lName="Username" type="text" value="Alice" />);
};

describe("testing the Label Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render without error", () => {
    const component = findByTestAttr(wrapper, "label-component");
    expect(component.length).toBe(1);
  });
  test("should render the label name as Username", () => {
    const component = findByTestAttr(wrapper, "label-name");
    expect(component.length).not.toBe(0);
    expect(component.text()).toBe("Username");
  });
  test("should render the input component without error", () => {
    const component = findByTestAttr(wrapper, "input-component");
    expect(component.length).toBe(1);
  });
});
