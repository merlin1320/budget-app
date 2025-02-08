import { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About";

    return () => {
      document.title = "My App";
    };
  });
  return <div>About Us</div>;
};

export default AboutPage;
