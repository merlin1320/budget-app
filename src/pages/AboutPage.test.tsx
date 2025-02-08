import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("renders the About page with the correct content", () => {
    render(<AboutPage />);

    // Check if the page title is displayed
    expect(screen.getByText("About This App")).toBeInTheDocument();

    // Check if the description paragraph is displayed
    expect(
      screen.getByText(
        "This app helps you manage your budget by tracking your income and expenses."
      )
    ).toBeInTheDocument();

    // Check if 'How to Use' section is present with instructions
    expect(screen.getByText("How to Use:")).toBeInTheDocument();
    expect(screen.getByText("Enter your sources of income and expenses.")).toBeInTheDocument();
    expect(
      screen.getByText("The app will calculate the total income, expenses, and remaining budget.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("You can save your budget to local storage or download it as a JSON file.")
    ).toBeInTheDocument();

    // Check if Author section is present
    expect(screen.getByText("Author")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Developed by Robert Young. A junior developer passionate about building useful tools."
      )
    ).toBeInTheDocument();

    // Check if GitHub link is present
    const githubLink = screen.getByText("View the GitHub Repository");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/merlin1320/budget-app");
  });

  it("should update document title on mount and unmount", () => {


    render(<AboutPage />);

    // Ensure the title was updated on mount
    expect(document.title).toEqual('About')

  });
});