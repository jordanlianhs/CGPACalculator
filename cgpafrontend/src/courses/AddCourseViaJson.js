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
      await axios.post("http://localhost:8080/addCourses", courses);
      // Assuming the server successfully adds the courses, navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Error adding courses:", error);
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
      <h3 className="">Add Course Via JSON</h3>
      <textarea
        className="form-control"
        placeholder="Enter JSON"
        name="json"
        onChange={(e) => onInputChange(e)}
      />
      <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>
        Add Courses
      </button>
    </div>
  );
}
