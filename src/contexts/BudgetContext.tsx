import React, { createContext, useState, ReactNode, useMemo, useContext } from "react";
type BudgetEntry = {
  id: number;
  description: string;
  amount: number;
};

// Define types for our context state
type BudgetContextType = {
  income: BudgetEntry[];
  expenseState: BudgetEntry[];
  totalIncome: number;
  totalExpense: number;
  total: number;
  setIncome: (income: BudgetEntry) => void;
  setExpenses: (expenses: BudgetEntry) => void;
  clearBudget: () => void;
};

// Initial state
const initialState: BudgetContextType = {
  income: [],
  expenseState: [],
  totalIncome: 0,
  totalExpense: 0,
  total: 0,
  setIncome: () => {},
  setExpenses: () => {},
  clearBudget: () => {},
};

// Create the context
export const BudgetContext = createContext<BudgetContextType>(initialState);

// BudgetProvider component
export const BudgetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [income, setIncomeState] = useState<BudgetEntry[]>([]);
  const [expenseState, setExpenseState] = useState<BudgetEntry[]>([]);

  const setIncome = (incomeEntry: BudgetEntry) => {
    setIncomeState([...income, incomeEntry]);
  };

  const setExpenses = (expenseEntry: BudgetEntry) => {
    setExpenseState([...expenseState, expenseEntry]);
  };

  const clearBudget = () => {
    setExpenseState([]);
    setIncomeState([]);
  };

  const totalIncome = useMemo(() => {
    const incomes = income.map((i) => {
      return i.amount;
    });
    let total = 0;
    incomes.forEach((i) => {
      total += i;
    });
    return total;
  },[income])

  const totalExpenses = useMemo(() => {
    const expense = expenseState.map((e) => {
      return e.amount;
    });
    let total = 0;
    expense.forEach((i) => {
      total += i;
    });
    return total;
  },[expenseState])

  // Total is derived from income and expenses
  const total = useMemo(()=>{
    return totalIncome - totalExpenses;
  },[totalExpenses,totalIncome])

  return (
    <BudgetContext.Provider
      value={{
        income,
        expenseState,
        total,
        totalIncome,
        totalExpense: totalExpenses,
        setIncome,
        setExpenses,
        clearBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

// Custom hook to use the context
export const useBudget = () => {
  return useContext(BudgetContext);
};
