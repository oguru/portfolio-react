import React from "react";
import { render } from "@testing-library/react";
import BlogBox from "./BlogBox";

describe("BlogBox tests", () => {
  it("should render", () => {
    expect(render(<BlogBox />)).toBeTruthy();
  });
});
