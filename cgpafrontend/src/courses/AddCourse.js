import React from "react";
import { useState } from "react";

export default function AddCourse() {
  const [course, setCourse] = useState({});
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Course</h2>

          <div className="mb-3">
            <label htmlFor="Course Code" className="form-label">
              Course Code
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Course Code"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="Course Name" className="form-label">
              Course Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Course Name"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="Course Credits" className="form-label">
              Course Credits
            </label>
            <input
              type={"number"}
              min={1}
              max={10}
              className="form-control"
              placeholder="Enter Course Credits"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="Course Grade" className="form-label">
              Course Grade
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Course Grade"
            ></input>
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
            ></input>
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
            ></input>
          </div>

          <div className="mb-3 d-flex justify-content-evenly">
            <button className="btn btn-outline-dark" type="submit">
              Submit
            </button>
            <button className="btn btn-danger btn-outline-dark" type="cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
