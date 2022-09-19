import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <div className="navbar shadow-lg text-neutral-context bg-neutral">
      <div className="container m-3">
      <Link to={`/`} className="text-4xl font-bold">
      <FaGithub className="text-4xl mr-5" />
        </Link>
      
        <Link to={`/`} className="text-xl font-bold">
          {title}
        </Link>
      </div>
      <div className="container flex justify-end">
        <button className="btn btn-sm btn-ghost">
          <Link to="/">Home</Link>
        </button>
        <button className="btn btn-sm btn-ghost">
        <Link to="/About">About</Link>
        </button>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
