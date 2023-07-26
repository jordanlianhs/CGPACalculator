import React, { useState } from "react";

export default function Converter() {
  const [html, setHtml] = useState("");
  const [json, setJson] = useState("");

  // Calculate the height of the input box based on its content length
  const inputBoxHeight = html.split("\n").length * 20; // Adjust the height factor as needed

  const parseHTMLToJSON = () => {
    if (html === "") {
      return;
    }
    // Create a parser to extract data from the HTML String
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Get all the tables
    const tables = doc.querySelectorAll("table");
    // Initialise an array to hold parsed data
    const jsonData = [];

    tables.forEach((table) => {
      const tableRows = table.querySelectorAll("tbody tr");
      const tableData = [];

      // Extract the year and sem from the first row of the table
      const row = tableRows[0];
      const cells = row.children;
      const year = parseInt(cells[1].textContent.trim().charAt(cells[1].textContent.trim().length - 1));
      const sem = parseInt(cells[0].textContent.trim().charAt(cells[0].textContent.trim().length - 1));

      // Loop through each row and extract the data (skipping the header row)
      for (let i = 2; i < tableRows.length - 1; i++) {
        // Returns the <tr> element
        const row = tableRows[i];
        // Returns the <td> elements in the row
        const cells = row.children;
        if (cells.length === 5) {
          const courseCode = cells[0].textContent.trim().split(" ")[0];
          const courseName = cells[0].textContent.trim().split(" ").slice(1, cells[0].textContent.trim().split(" ").length).join(" ");
          const courseAU = parseInt(cells[1].textContent.trim(), 10);
          const grade = cells[2].textContent.trim();

          // Create an object with the extracted data and add it to the tableData array
          tableData.push({
            coursecode: courseCode,
            name: courseName,
            credit: courseAU,
            grade: grade,
            year: year,
            sem: sem,
          });
        }
      }

      // Add the tableData to the jsonData array
      jsonData.push(...tableData);
    });

    console.log(jsonData);

    // Convert the jsonData array to a JSON string and set it in the state
    setJson(JSON.stringify(jsonData, null, 2));
  };

  return (
    <div className="container mt-4">
      <div className="mt-4">
      <input
          type="text"
          className="form-control"
          placeholder="Enter HTML of Courses"
          name="html"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          style={{ height: `${inputBoxHeight}px` }} // Apply dynamic height to the input box
        />
        <div className="m-3">
            Enter the XPath of the table containing the courses: <br />
            Mine was this: /html/body/div[3]/div/div/section[2]/div/div/center/font[3]
            You can inspect element and copy the XPath of the table containing the courses.
        </div>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={parseHTMLToJSON}>
          Convert to JSON
        </button>
      </div>
      <div className="mt-4">
        <textarea className="form-control" rows={10} value={json} readOnly></textarea>
      </div>
    </div>
  );
}
