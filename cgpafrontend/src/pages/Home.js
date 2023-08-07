import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { compareDesc } from "date-fns";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [cgpa, setCgpa] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const [creditToGrad, setCreditToGrad] = useState(0);
  const [groupedCoursesWithSemInfo, setGroupedCoursesWithSemInfo] = useState([]);

  useEffect(() => {
    loadCourses();
    loadCgpa();
    loadTotalCredits();

    const storedCreditToGrad = localStorage.getItem("creditToGrad");
    if (storedCreditToGrad !== null) {
      setCreditToGrad(parseInt(storedCreditToGrad));
    }
  }, []);

  useEffect(() => {
    const fetchGroupedCourses = async () => {
      try {
        const result = await groupCoursesByYearAndSem();
        setGroupedCoursesWithSemInfo(result);
      } catch (error) {
        console.error("Error fetching grouped courses:", error);
      }
    };

    // Function to group courses by year and semester
    const groupCoursesByYearAndSem = async () => {
      const groupedCourses = courses.reduce((result, course) => {
        const { year, sem } = course;
        const key = `${year}-${sem}`;

        if (!result[key]) {
          result[key] = [];
        }

        result[key].push(course);
        return result;
      }, {});

      // Sort the keys representing year and semester in reverse order
      const sortedKeys = Object.keys(groupedCourses).sort((a, b) => {
        const [yearA, semA] = a.split("-");
        const [yearB, semB] = b.split("-");
        return compareDesc(new Date(yearA, semA), new Date(yearB, semB));
      });

      // Create an array of [key, courses] pairs in the sorted order
      const sortedGroupedCourses = sortedKeys.map((key) => [
        key,
        groupedCourses[key],
      ]);

      for (const [key, coursesGroup] of sortedGroupedCourses) {
        const [year, sem] = key.split("-");

        // Fetch SGPA for the specific year and semester
        try {
          const sgpaData = await axios.get(
            `https://34.143.202.68/calculateSGPA/${year}/${sem}`
          );
          coursesGroup.sgpa = sgpaData.data;
          const sCredit = await axios.get(
            `https://34.143.202.68/calculateSCredit/${year}/${sem}`
          );
          coursesGroup.semCredits = sCredit.data;
        } catch (error) {
          // Handle any errors that occur during the API request
          console.error(`Error fetching SGPA for ${year}-${sem}:`, error);
          coursesGroup.sgpa = 0; // Set a default value for SGPA in case of error
          coursesGroup.semCredits = 0; // Set a default value for SCredits in case of error
        }
      }

      return sortedGroupedCourses;
    };

    fetchGroupedCourses();
  }, [courses]); // Call this useEffect hook whenever 'courses' state changes

  const loadCourses = async () => {
    const result = await axios.get("https://34.143.202.68/getCourses");
    setCourses(result.data);
    console.log(result.data);
  };
  const loadCgpa = async () => {
    const result = await axios.get("https://34.143.202.68/calculateCGPA");
    setCgpa(result.data);
  };
  const loadTotalCredits = async () => {
    const result = await axios.get("https://34.143.202.68/getTotalCredits");
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
            {groupedCoursesWithSemInfo.map(([key, coursesGroup]) => (
              <React.Fragment key={key}>
                <tr className="table-secondary">
                  <th colSpan="7" className="text-center">
                    Year {coursesGroup[0].year}, Semester {coursesGroup[0].sem},
                    Semester Credits: {coursesGroup.semCredits}, Semester GPA
                    (SGPA): {coursesGroup.sgpa}
                  </th>
                </tr>
                {coursesGroup.map((course) => (
                  <tr className="table-success" key={course.coursecode}>
                    <th scope="row">{course.coursecode}</th>
                    <td>{course.name}</td>
                    <td>{course.credit}</td>
                    <td>{course.grade}</td>
                    <td>{course.year}</td>
                    <td>{course.sem}</td>
                    <td className="d-flex justify-content-between">
                      <Link
                        className="btn btn-dark mx-auto"
                        to={`/CGPACalculator/viewcourse/${course.coursecode}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-dark mx-auto"
                        to={`/CGPACalculator/editcourse/${course.coursecode}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger btn-outline-dark mx-auto"
                        to={`/CGPACalculator/deletecourse/${course.coursecode}`}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
