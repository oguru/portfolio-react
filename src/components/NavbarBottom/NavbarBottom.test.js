import React from "react";
import { render } from "@testing-library/react";
import NavbarBottom from "./NavbarBottom";

describe("NavbarBottom tests", () => {
  it("should render", () => {
    expect(render(<NavbarBottom />)).toBeTruthy();
  });
});
