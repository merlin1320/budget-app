import { useEffect, useState } from "react";
import { useBudget } from "../contexts/BudgetContext";

const ManageBudget = () => {
  const {
    income,
    expenseState,
    total,
    totalExpense,
    totalIncome,
    setIncome,
    setExpenses,
    clearBudget,
  } = useBudget();;
  const [newEntry, setNewEntry] = useState({ description: "", amount: "" });
  useEffect(() => {
    document.title = "Budget";

    return () => {
      document.title = "My App";
    };
  });

//   useEffect(() => {
//     const savedBudget = localStorage.getItem("budget");
//     if (savedBudget) {
//       const { income, expenses } = JSON.parse(savedBudget);
//       setIncome(income);
//       setExpenses(expenses);
//     }
//   }, []);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify({ income, expenseState }));
  }, [income, expenseState]);

  const handleAddEntry = (type: "income" | "expenses") => {
    if (isNaN(Number(newEntry.amount)) || newEntry.amount === "") {
      alert("Amount must be a valid number");
      return;
    }

    const entry = {
      id: Date.now(),
      description: newEntry.description,
      amount: Number(newEntry.amount),
    };

    if (type === "income") {
      setIncome(entry);
    } else {
      setExpenses(entry);
    }

    setNewEntry({ description: "", amount: "" });
  };

  const handleClearBudget = () => {
    if (window.confirm("Are you sure you want to clear the budget?")) {
      clearBudget();
      localStorage.removeItem("budget");
    }
  };

  const handleDownload = () => {
    const data = JSON.stringify({ income, expenseState }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "budget.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Manage Budget</h2>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={newEntry.description}
          onChange={(e) =>
            setNewEntry({ ...newEntry, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Amount"
          value={newEntry.amount}
          onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
        />
        <button onClick={() => handleAddEntry("income")}>Add Income</button>
        <button onClick={() => handleAddEntry("expenses")}>Add Expense</button>
      </div>
      <h3>Total Income: ${totalIncome}</h3>
      <h3>Total Expenses: ${totalExpense}</h3>
      <h3>Balance: ${total}</h3>
      <button onClick={handleDownload}>Download Budget</button>
      <button onClick={handleClearBudget}>Clear Budget</button>
    </div>
  );
};

export default ManageBudget;
