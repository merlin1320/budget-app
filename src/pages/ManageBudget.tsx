import React, { useEffect } from "react";

export const ManageBudget = () => {
  useEffect(() => {
    document.title = "Budget";

    return () => {
      document.title = "My App";
    };
  });
  return <div>Budget</div>;
};

export default ManageBudget;
