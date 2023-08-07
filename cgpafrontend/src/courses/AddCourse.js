import React ,  { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

export default function AddCourse() {

  let navigate = useNavigate();

  const [course, setCourse] = useState({
    coursecode: "",
    name: "",
    credit: "",
    grade: "",
    year: "",
    sem: ""
  });

  const {coursecode, name, credit, grade, year, sem} = course;

  const onInputChange = (e) =>{
    setCourse({...course,[e.target.name]: e.target.value})
  }

  const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(course);
    await axios.post("https://34.143.202.68:8080/addCourse", course);
    navigate("/");
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-md-6 border rounded p-4 mt-2 shadow">
          <h2 className="text-center mb-3">Add Course</h2>
          
          <form onSubmit={(e)=>onSubmit(e)}>
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

          <div className="mb-3 d-flex justify-content-evenly">
            <button className="btn btn-outline-dark" type="submit">
              Submit
            </button>
            <Link className="btn btn-danger btn-outline-dark" to="/">
              Cancel
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
