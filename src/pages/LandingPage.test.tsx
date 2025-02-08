import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("LandingPage Component", () => {
  it("renders the About text", () => {
    render(<LandingPage />);
    expect(screen.getByText("Landing Home Page")).toBeInTheDocument()
  });
});
