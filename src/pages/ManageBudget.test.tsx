import { render, screen } from "@testing-library/react";
import ManageBudget from "./ManageBudget";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("ManageBudget Component", () => {
  it("renders the About text", () => {
    render(<ManageBudget />);
    expect(screen.getByText("Budget")).toBeInTheDocument()
  });
});
