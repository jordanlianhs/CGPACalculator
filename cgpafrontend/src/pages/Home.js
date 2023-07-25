import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [cgpa, setCgpa] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const [creditToGrad, setCreditToGrad] = useState(0);

  useEffect(() => {
    loadCourses();
    loadCgpa();
    loadTotalCredits();
    const storedCreditToGrad = localStorage.getItem("creditToGrad");
    if (storedCreditToGrad !== null) {
      setCreditToGrad(parseInt(storedCreditToGrad));
    }
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/getCourses");
    setCourses(result.data);
  };
  const loadCgpa = async () => {
    const result = await axios.get("http://localhost:8080/calculateCGPA");
    setCgpa(result.data);
  };
  const loadTotalCredits = async () => {
    const result = await axios.get("http://localhost:8080/getTotalCredits");
    setTotalCredits(result.data);
  };
  // Update the creditToGrad state and also store it in localStorage
  const handleCreditToGradChange = (e) => {
    const value = e.target.value;
    setCreditToGrad(value);
    localStorage.setItem("creditToGrad", value);
  };

  return (
    <div className="container mt-4">
      <div>
        <table className="table table-sm table-bordered">
          <thead className="table-success table-sm">
            <tr>
              <th scope="col">Total Credits to Graduate </th>
              <th scope="col">Total Credits Earned</th>
              <th scope="col">Credits Remaining to Graduate</th>
              <th scope="col">Cumulative GPA (CGPA)</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="table-success">
              <td>
                <input
                  type="number"
                  className="form-control align-content-md-center"
                  placeholder="Enter Total Credits to Graduate"
                  name="creditToGrad"
                  value={creditToGrad}
                  onChange={handleCreditToGradChange}
                />
              </td>
              <td>{totalCredits}</td>
              <td>{creditToGrad - totalCredits}</td>
              <td>{cgpa}</td> 
              {/* .toPrecision(3) */}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-4">
        {/*If we want to make padding smaller, table-sm can be used */}
        <table className="table table-bordered ">
          <thead className="table-success ">
            <tr>
              <th scope="col">Course Code</th>
              <th scope="col">Course Name</th>
              <th scope="col">Course Credits</th>
              <th scope="col">Grade</th>
              <th scope="col">Year</th>
              <th scope="col">Semester</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {courses.map((user) => (
              <tr className="table-success" key={user.coursecode}>
                <th scope="row">{user.coursecode}</th>
                <td>{user.name}</td>
                <td>{user.credit}</td>
                <td>{user.grade}</td>
                <td>{user.year}</td>
                <td>{user.sem}</td>
                <td className="d-flex justify-content-between">
                  <Link
                    className="btn btn-dark mx-auto"
                    to={`/viewcourse/${user.coursecode}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-dark mx-auto"
                    to={`/editcourse/${user.coursecode}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger btn-outline-dark mx-auto"
                    to={`/deletecourse/${user.coursecode}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
