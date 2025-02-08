import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BudgetProvider, useBudget } from "./BudgetContext";
import "@testing-library/jest-dom";

// Helper component to use the custom hook
const TestComponent = () => {
  const {
    income,
    expenseState,
    totalIncome,
    totalExpense,
    total,
    setIncome,
    setExpenses,
    clearBudget,
  } = useBudget();

  return (
    <div>
      <h1>Total Income: ${totalIncome}</h1>
      <h1>Total Expenses: ${totalExpense}</h1>
      <h1>Total: ${total}</h1>
      <button onClick={() => setIncome({ id: 1, description: "Salary", amount: 1000 })}>Add Income</button>
      <button onClick={() => setExpenses({ id: 1, description: "Groceries", amount: 200 })}>Add Expense</button>
      <button onClick={clearBudget}>Clear Budget</button>
    </div>
  );
};

describe("BudgetContext", () => {
  it("should render the initial context values", () => {
    render(
      <BudgetProvider>
        <TestComponent />
      </BudgetProvider>
    );

    // Verify initial values
    expect(screen.getByText("Total Income: $0")).toBeInTheDocument();
    expect(screen.getByText("Total Expenses: $0")).toBeInTheDocument();
    expect(screen.getByText("Total: $0")).toBeInTheDocument();
  });

  it("should update total income when 'Add Income' is clicked", async () => {
    render(
      <BudgetProvider>
        <TestComponent />
      </BudgetProvider>
    );

    const addIncomeButton = screen.getByText("Add Income");

    fireEvent.click(addIncomeButton);

    await waitFor(() => {
      expect(screen.getByText("Total Income: $1000")).toBeInTheDocument();
    });
  });

  it("should update total expenses when 'Add Expense' is clicked", async () => {
    render(
      <BudgetProvider>
        <TestComponent />
      </BudgetProvider>
    );

    const addExpenseButton = screen.getByText("Add Expense");

    fireEvent.click(addExpenseButton);

    await waitFor(() => {
      expect(screen.getByText("Total Expenses: $200")).toBeInTheDocument();
    });
  });

  it("should update the total when income and expenses are added", async () => {
    render(
      <BudgetProvider>
        <TestComponent />
      </BudgetProvider>
    );

    const addIncomeButton = screen.getByText("Add Income");
    const addExpenseButton = screen.getByText("Add Expense");

    fireEvent.click(addIncomeButton);
    fireEvent.click(addExpenseButton);

    await waitFor(() => {
      expect(screen.getByText("Total: $800")).toBeInTheDocument();
    });
  });

  it("should clear budget when 'Clear Budget' is clicked", async () => {
    render(
      <BudgetProvider>
        <TestComponent />
      </BudgetProvider>
    );

    const addIncomeButton = screen.getByText("Add Income");
    const addExpenseButton = screen.getByText("Add Expense");
    const clearBudgetButton = screen.getByText("Clear Budget");

    fireEvent.click(addIncomeButton);
    fireEvent.click(addExpenseButton);

    await waitFor(() => {
      expect(screen.getByText("Total Income: $1000")).toBeInTheDocument();
      expect(screen.getByText("Total Expenses: $200")).toBeInTheDocument();
      expect(screen.getByText("Total: $800")).toBeInTheDocument();
    });

    fireEvent.click(clearBudgetButton);

    await waitFor(() => {
      expect(screen.getByText("Total Income: $0")).toBeInTheDocument();
      expect(screen.getByText("Total Expenses: $0")).toBeInTheDocument();
      expect(screen.getByText("Total: $0")).toBeInTheDocument();
    });
  });
});