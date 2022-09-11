import React from "react";
import { render } from "@testing-library/react";
import NavLink from "./NavLink";

describe("NavLink tests", () => {
  it("should render", () => {
    expect(render(<NavLink />)).toBeTruthy();
  });
});
