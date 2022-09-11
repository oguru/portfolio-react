import React from "react";
import { render } from "@testing-library/react";
import PageButton from "./PageButton";

describe("PageButton tests", () => {
  it("should render", () => {
    expect(render(<PageButton />)).toBeTruthy();
  });
});
