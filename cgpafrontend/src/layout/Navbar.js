import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            CGPA Calculator
          </Link>
          
          <Link className="btn btn-outline-light" to="addcourse">
            Add Course
          </Link>
        </div>
      </nav>
    </div>
  );
}
