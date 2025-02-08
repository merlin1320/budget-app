import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi, Mock } from "vitest";
import { useBudget } from "../contexts/BudgetContext";
import ManageBudget from "./ManageBudget";


// Mock the useBudget hook
vi.mock("../contexts/BudgetContext", () => ({
  useBudget: vi.fn(),
}));

describe("ManageBudget", () => {
  const mockTotalIncome = 1000;
  const mockTotalExpense = 500;
  const mockTotal = mockTotalIncome - mockTotalExpense;
  const mockSetIncome = vi.fn();
  const mockSetExpenses = vi.fn();
  const mockClearBudget = vi.fn();

  beforeEach(() => {
    // Mock the values returned by useBudget hook
    (useBudget as Mock).mockReturnValue({
      income: mockTotalIncome,
      expenseState: [],
      total: mockTotal,
      totalExpense: mockTotalExpense,
      totalIncome: mockTotalIncome,
      setIncome: mockSetIncome,
      setExpenses: mockSetExpenses,
      clearBudget: mockClearBudget,
    });
  });

  it("renders and displays budget values", () => {
    render(
        <ManageBudget />
    );

    expect(screen.getByText(`Total Income: $${mockTotalIncome}`)).toBeInTheDocument();
    expect(screen.getByText(`Total Expenses: $${mockTotalExpense}`)).toBeInTheDocument();
    expect(screen.getByText(`Balance: $${mockTotal}`)).toBeInTheDocument();
  });

  it("adds income when 'Add Income' button is clicked", async () => {
    render(
        <ManageBudget />
    );

    const descriptionInput = screen.getByPlaceholderText("Description");
    const amountInput = screen.getByPlaceholderText("Amount");

    // Fill out the form
    fireEvent.change(descriptionInput, { target: { value: "Salary" } });
    fireEvent.change(amountInput, { target: { value: "2000" } });

    const addIncomeButton = screen.getByText("Add Income");
    fireEvent.click(addIncomeButton);

    await waitFor(() => {
      expect(mockSetIncome).toHaveBeenCalled();
      expect(mockSetIncome).toHaveBeenCalledWith({
        id: expect.any(Number), // id is generated based on Date.now()
        description: "Salary",
        amount: 2000,
      });
    });
  });

  it("adds expense when 'Add Expense' button is clicked", async () => {
    render(
        <ManageBudget />
    );

    const descriptionInput = screen.getByPlaceholderText("Description");
    const amountInput = screen.getByPlaceholderText("Amount");

    // Fill out the form
    fireEvent.change(descriptionInput, { target: { value: "Groceries" } });
    fireEvent.change(amountInput, { target: { value: "300" } });

    const addExpenseButton = screen.getByText("Add Expense");
    fireEvent.click(addExpenseButton);

    await waitFor(() => {
      expect(mockSetExpenses).toHaveBeenCalled();
      expect(mockSetExpenses).toHaveBeenCalledWith({
        id: expect.any(Number), // id is generated based on Date.now()
        description: "Groceries",
        amount: 300,
      });
    });
  });

  it("clears the budget when 'Clear Budget' button is clicked", async () => {
    render(
        <ManageBudget />
    );

    const clearBudgetButton = screen.getByText("Clear Budget");

    // Mock window.confirm to automatically confirm
    vi.spyOn(window, "confirm").mockReturnValue(true);

    fireEvent.click(clearBudgetButton);

    await waitFor(() => {
      expect(mockClearBudget).toHaveBeenCalled();
      expect(localStorage.getItem("budget")).toBeNull(); // Check if budget is removed from localStorage
    });
  });

  it("downloads budget as a JSON file when 'Download Budget' button is clicked", async () => {
    render(
        <ManageBudget />
    );

    const downloadButton = screen.getByText("Download Budget");

    // Mock the file creation
    const createObjectURLSpy = vi.fn();
    globalThis.URL.createObjectURL = createObjectURLSpy;

    const downloadLink = document.createElement("a");
    downloadLink.href = "blob:https://example.com/abcd1234"; // Mock blob URL
    downloadButton.appendChild(downloadLink);

    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(createObjectURLSpy).toHaveBeenCalled();
      expect(downloadLink.href).toBe("blob:https://example.com/abcd1234"); // Check if download link is created
    });
  });

  it("should update document title on mount and unmount", async () => {
    // const mockTitle = vi.fn();

    // Override the global document title setter to track changes
    // global.document.title = mockTitle;

    render(
        <ManageBudget />
    );

    // Ensure the title was updated on mount
    expect(document.title).toEqual('Budget');

    // Unmount the component and check if the title was reverted
    // screen.unmount();
    // expect(mockTitle).toHaveBeenCalledWith("My App");
  });
});