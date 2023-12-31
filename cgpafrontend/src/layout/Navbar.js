import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/CGPACalculator"}>
            CGPA Calculator
          </Link>
          <div>
            <Link className="btn btn-outline-light me-3" to="/CGPACalculator/converter">
              Convert HTML of Courses to JSON
            </Link>
          </div>
          <div className="d-flex">
            <Link className="btn btn-outline-light me-3" to="/CGPACalculator/addcourseviajson">
              Add Course Via JSON
            </Link>
            <Link className="btn btn-outline-light me-3" to="/CGPACalculator/addcourses">
              Add Courses
            </Link>
            <Link className="btn btn-outline-light" to="/CGPACalculator/addcourse">
              Add Course
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
