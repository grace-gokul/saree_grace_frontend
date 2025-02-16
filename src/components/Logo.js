import React from "react";
import { Link } from "react-router-dom";
import logo from "../assest/saree_grace_logo.png"; // Update with your logo path

const Logo = ({ width = 150 }) => {
  return (
    <Link to="/">
      <img src={logo} alt="Saree Grace" width={width} />
    </Link>
  );
};

export default Logo;
