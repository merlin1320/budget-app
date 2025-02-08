import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("AboutPage Component", () => {
  it("renders the About text", () => {
    render(<AboutPage />);
    expect(screen.getByText("About")).toBeInTheDocument()
  });
});
