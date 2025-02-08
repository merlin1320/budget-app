import { Link } from "react-router";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="budget">Budget</Link>
      <Link to="about">About</Link>
    </div>
  );
};

export default NavBar;
