import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App Component Routing", () => {
  it("renders the LandingPage by default", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Landing Home Page")) // Ensure this matches text from LandingPage
      .toBeInTheDocument();
  });

  it("renders the AboutPage when navigating to /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("About Us")) // Ensure this matches text from AboutPage
      .toBeInTheDocument();
  });

  it("renders the ManageBudget page when navigating to /budget", () => {
    render(
      <MemoryRouter initialEntries={["/budget"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("My Budget")) // Ensure this matches text from ManageBudget
      .toBeInTheDocument();
  });

  it("renders the NavBar component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});
