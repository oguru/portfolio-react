import React from "react";
import { render } from "@testing-library/react";
import BlogModal from "./BlogModal";

describe("BlogModal tests", () => {
  it("should render", () => {
    expect(render(<BlogModal />)).toBeTruthy();
  });
});
