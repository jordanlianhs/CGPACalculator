import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCourseViaJson() {
  let navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const onInputChange = (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(e.target.value);
      if (Array.isArray(parsedJson)) {
        // If the parsed JSON is an array, update the state
        setCourses(parsedJson);
      } else {
        console.error("Input should be an array of courses.");
      }
    } catch (error) {
      console.error("Invalid JSON input:", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(courses);
    try {
      await axios.post("https://34.143.202.68/addCourses", courses);
      // Assuming the server successfully adds the courses, navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Error adding courses:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h3>Add Course Via JSON</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <textarea
            className="form-control"
            placeholder="Enter JSON"
            name="json"
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <button className="btn btn-primary btn-block" onClick={(e) => onSubmit(e)}>
            Add Courses
          </button>
        </div>
      </div>
    </div>
  );
}
