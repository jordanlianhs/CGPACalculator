import React ,  { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditCourse() {

  let navigate = useNavigate();

  const {courseid} = useParams();

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

  useEffect(() => {
    const loadCourse = async()=>{
        if(courseid){
            const result = await axios.get(`https://34.143.202.68:8080/getCourse/${courseid}`);
            setCourse(result.data);
            console.log(result.data);
        }
    }
    
    loadCourse();
  }, [courseid])

  const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(course);
    await axios.put(`https://34.143.202.68:8080/updateCourse/${courseid}`, course);
    navigate("/");
  }

  

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-md-6 offset-mdå-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center mb-3">Edit Course</h2>
          
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Course Code" className="form-label">
              Course Code
              <span
                  className="text-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Course code cannot be edited. Please delete the course instead."
                >
                  &nbsp;Hover here for more info.
                </span>
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Course Code"
              name="coursecode"
              value={coursecode}
              onChange={(e) => onInputChange(e)}
              disabled = {true}
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
            <button className="btn btn-danger btn-outline-dark" type="submit">
              Submit
            </button>
            <Link className="btn btn-outline-dark" to="/">
              Cancel
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
