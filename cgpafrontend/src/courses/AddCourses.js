import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddCourses() {
  let navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    coursecode: "",
    name: "",
    credit: "",
    grade: "",
    year: "",
    sem: "",
  });
  const { coursecode, name, credit, grade, year, sem } = course;

  const onInputChange = (e) => {
    e.preventDefault();
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    setCourses([...courses, course]);
    e.preventDefault();
    console.log(courses);
    await axios.post("https://34.143.202.68:8080/addCourses", courses);
    navigate("/");
  };

  const onAddAnotherCourse = () => {
    setCourses([...courses, course]);
    setCourse({
      coursecode: "",
      name: "",
      credit: "",
      grade: "",
      year: "",
      sem: "",
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-md-6 border rounded p-4 mt-2 shadow">
          <h2 className="text-center mb-3">Add Course</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Course Code" className="form-label">
                Course Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Code"
                name="coursecode"
                value={coursecode}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Course Name" className="form-label">
                Course Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Course Credit" className="form-label">
                Course Credits
              </label>
              <input
                type={"number"}
                min={1}
                max={10}
                className="form-control"
                placeholder="Enter Course Credit"
                name="credit"
                value={credit}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Course Grade" className="form-label">
                Course Grade
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Grade"
                name="grade"
                value={grade}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Year" className="form-label">
                Year
              </label>
              <input
                type={"number"}
                min={1}
                max={8}
                className="form-control"
                placeholder="Enter Year"
                name="year"
                value={year}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Course Semester" className="form-label">
                Semester
              </label>
              <input
                type={"number"}
                min={1}
                max={2}
                className="form-control"
                placeholder="Enter Semester"
                name="sem"
                value={sem}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* Add another course button */}

            <div className="mb-3 d-flex justify-content-evenly">
              <button className="btn btn-outline-dark" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={onAddAnotherCourse}
              >
                Add Another Course
              </button>
              <Link className="btn btn-danger btn-outline-dark" to="/CGPACalculator">
                Cancel
              </Link>
            </div>
            {/* Display added courses */}
            <div className="mt-4">
                <h3>Added Courses:</h3>
                <ul>
                  {courses.map((addedCourse) => (
                    <li key={addedCourse.coursecode}>
                      Course Code: {addedCourse.coursecode}, Name:{" "}
                      {addedCourse.name}
                    </li>
                  ))}
                </ul>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
