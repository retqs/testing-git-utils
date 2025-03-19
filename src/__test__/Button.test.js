import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click me" onClick={() => {}} />);

    // Check if the button text is "Click me"
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const mockOnClick = jest.fn();

    render(<Button label="Click me" onClick={mockOnClick} />);

    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);

    // Verify that the onClick handler was called once
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
