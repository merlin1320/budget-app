import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useBudget } from "../contexts/BudgetContext";

// Registering chartjs components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const LandingPage = () => {
  const { total, totalExpense, totalIncome } = useBudget();

  // Chart data
  const data = {
    labels: ["Income", "Expenses", "Total"],
    datasets: [
      {
        label: "Budget Breakdown",
        data: [totalIncome, totalExpense, total],
        backgroundColor: ["green", "red", "blue"],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Budget Overview",
      },
    },
  };
  useEffect(() => {
    document.title = "Home";
    return () => {
      document.title = "My App";
    };
  });
  return (
    <div>
      <h1>Landing Page</h1>
      <div style={{width:'50%', height:'75%'}}>
        <Bar data={data} options={options} />
      </div>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpense}</p>
      <p>Remaining Budget: ${total}</p>
    </div>
  );
};

export default LandingPage;
