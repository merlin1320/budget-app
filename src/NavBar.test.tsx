import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import { describe, it, expect } from "vitest";

describe("NavBar Component", () => {
  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Budget")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("contains correct link paths", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("Budget")).toHaveAttribute("href", "/budget");
    expect(screen.getByText("About")).toHaveAttribute("href", "/about");
  });
});
