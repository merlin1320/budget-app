import { useEffect } from "react";

export const ManageBudget = () => {
  useEffect(() => {
    document.title = "Budget";

    return () => {
      document.title = "My App";
    };
  });
  return <div>My Budget</div>;
};

export default ManageBudget;
