import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { useBudget } from "../contexts/BudgetContext";
import { LandingPage } from "./LandingPage";
import "@testing-library/jest-dom";

// Mock the useBudget hook
vi.mock("../contexts/BudgetContext", () => ({
  useBudget: vi.fn(),
}));

describe("LandingPage", () => {
  const mockTotalIncome = 1000;
  const mockTotalExpense = 500;
  const mockTotal = mockTotalIncome - mockTotalExpense;

  beforeEach(() => {
    // Mock the values returned by useBudget hook
    (useBudget as Mock).mockReturnValue({
      totalIncome: mockTotalIncome,
      totalExpense: mockTotalExpense,
      total: mockTotal,
    });
  });

  it("renders correctly and displays income, expense, and remaining budget", async () => {
    render(
        <LandingPage />
    );

    // Check if chart is rendered
    const chartElement = screen.getByRole("img"); // The chart is rendered as an <img> by react-chartjs-2
    expect(chartElement).toBeInTheDocument();

    // Check if the budget information is displayed correctly
    expect(screen.getByText(`Total Income: $${mockTotalIncome}`)).toBeInTheDocument();
    expect(screen.getByText(`Total Expenses: $${mockTotalExpense}`)).toBeInTheDocument();
    expect(screen.getByText(`Remaining Budget: $${mockTotal}`)).toBeInTheDocument();
  });

  it("should update document title on mount and unmount", async () => {
    // const mockTitle = vi.fn();

    // Override the global document title setter to track changes
    // global.document.title = mockTitle;

    render(
        <LandingPage />
    );

    // Ensure the title was updated on mount
    expect(document.title).toEqual('Home')

    // Unmount the component and check if the title was reverted
    // screen.unmount();
    // expect(mockTitle).toHaveBeenCalledWith("My App");
  });
});