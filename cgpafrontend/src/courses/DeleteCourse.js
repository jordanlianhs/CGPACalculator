import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function DeleteCourse() {
  const [course, setCourse] = useState({
    coursecode: "",
    name: "",
    credit: "",
    grade: "",
    year: "",
    sem: "",
  });

  const { courseid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCourse = async () => {
        if (courseid) {
          const result = await axios.get(
            `https://34.143.202.68/getCourse/${courseid}`
          );
          setCourse(result.data);
          console.log(result.data);
        }
    };

    loadCourse();
  }, [courseid]);

  const onSubmit = async (e) => {
    await axios.delete(`https://34.143.202.68/deleteCourse/${courseid}`);
    navigate("/CGPACalculator");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-md-6 offset-mdå-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center mb-3">Course Details</h2>

          <div className="card">
            <div className="card-header">
              Details of course
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b> Course Code: </b>
                  {course.coursecode}
                </li>
                <li className="list-group-item">
                  <b> Course Name: </b>
                  {course.name}
                </li>
                <li className="list-group-item">
                  <b> Course Credits: </b>
                  {course.credit}
                </li>
                <li className="list-group-item">
                  <b> Grade: </b>
                  {course.grade}
                </li>
                <li className="list-group-item">
                  <b> Year: </b>
                  {course.year}
                </li>
                <li className="list-group-item">
                  <b> Semester: </b>
                  {course.sem}
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-evenly">
            Are you sure you want to delete this course?
          </div>

          <div className="mb-3 d-flex justify-content-evenly">
            <button
              className="btn btn-danger btn-outline-dark"
              type="button"
              onClick={onSubmit}
            >
              Delete
            </button>
            <Link className="btn btn-outline-dark" to="/CGPACalculator">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
