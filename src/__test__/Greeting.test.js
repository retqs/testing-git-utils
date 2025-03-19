// Greeting.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";

describe("Greeting Component", () => {
  it("renders a greeting with the provided name", () => {
    render(<Greeting name="John" />);
    const screenText = screen.getByText(/Hello, John!/i).textContent;
    expect(screenText).toBe("Hello, John!");
  });

  it("renders a default greeting when no name is provided", () => {
    render(<Greeting />);
    const screenText = screen.getByText(/Hello, stranger!/i).textContent;
    expect(screenText).toBe("Hello, stranger!");
  });
});
