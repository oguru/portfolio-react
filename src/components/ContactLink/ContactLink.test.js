import React from "react";
import { render } from "@testing-library/react";
import ContactLink from "./ContactLink";

describe("ContactLink tests", () => {
  it("should render", () => {
    expect(render(<ContactLink />)).toBeTruthy();
  });
});
