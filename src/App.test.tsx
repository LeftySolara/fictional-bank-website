import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
    const header = screen.getByText("Hello World!");
    expect(header).not.toBeNull();
  });
});
