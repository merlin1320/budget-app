import React, { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About";

    return () => {
      document.title = "My App";
    };
  });
  return <div>About</div>;
};

export default AboutPage;
