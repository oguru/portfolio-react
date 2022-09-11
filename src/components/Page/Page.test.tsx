import React from "react";
import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page tests", () => {
  it("should render", () => {
    expect(render(<Page />)).toBeTruthy();
  });
});
