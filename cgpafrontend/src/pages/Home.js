import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getCourses");
    setUsers(result.data)
    console.log(result.data);
};

  return (
    <div className="container">
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
            {users.map((user,index) => (
              <tr className="table-success">
                <th scope="row">{user.coursecode}</th>
                <td>{user.name}</td>
                <td>{user.credits}</td>
                <td>{user.grade}</td>
                <td>{user.year}</td>
                <td>{user.sem}</td>
                <td className="d-flex justify-content-between">
                    <button className="btn btn-dark mx-auto"> 
                      View
                    </button>
                    <button className="btn btn-outline-dark mx-auto"> 
                      Edit
                    </button>
                    <button className="btn btn-danger btn-outline-dark mx-auto"> 
                      Delete
                    </button>
                </td>
              </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
