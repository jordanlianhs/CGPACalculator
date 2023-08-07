import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewCourse() {

    const [course, setCourse] = useState({
        coursecode: "",
        name: "",
        credit: "",
        grade: "",
        year: "",
        sem: ""
    });

    const {courseid} = useParams();

    useEffect(() => {
        const loadCourse = async()=>{
            console.log(courseid);
            if(courseid){
                const result = await axios.get(`http://34.143.202.68:8080/getCourse/${courseid}`);
                setCourse(result.data);
                console.log(result.data);
            }
        }
        
        loadCourse();
      }, [courseid])

  return(
  <div className="container">
    <div className="row justify-content-center mt-2">
      <div className="col-md-6 offset-mdå-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center mb-3">Course Details</h2>

        <div className="card mb-3">
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
        <Link className= "btn btn-outline-dark" to="/">
            Back to Home
        </Link>
      </div>
    </div>
  </div>
  );
}
