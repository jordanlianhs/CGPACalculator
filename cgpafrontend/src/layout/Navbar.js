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
          <div className="d-flex">
            <Link className="btn btn-outline-light me-3" to="addcourses">
              Add Courses
            </Link>
            <Link className="btn btn-outline-light" to="addcourse">
              Add Course
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
