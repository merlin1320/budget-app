import { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About";

    return () => {
      document.title = "My App";
    };
  });
  return (
    <div>
      <h1>About This App</h1>
      <p>
        This app helps you manage your budget by tracking your income and
        expenses.
      </p>
      <h2>How to Use:</h2>
      <ul>
        <li>Enter your sources of income and expenses.</li>
        <li>
          The app will calculate the total income, expenses, and remaining
          budget.
        </li>
        <li>
          You can save your budget to local storage or download it as a JSON
          file.
        </li>
      </ul>
      <h3>Author</h3>
      <p>
        Developed by Robert Young. A junior developer passionate about building
        useful tools.
      </p>
      <a
        href="https://github.com/merlin1320/budget-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the GitHub Repository
      </a>
    </div>
  );
};

export default AboutPage;
