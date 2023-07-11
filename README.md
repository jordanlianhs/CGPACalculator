# CGPACalculator 
Calculates CGPA and SGPA for University Students  

## Backend: springboot commands within cgpabackend 
mvn clean install -DskipTests 
mvn spring-boot:run

## Frontend: npm commands within cgpafrontend
npx create-react-app cgpafrontend
npm install
npm start

## POSTMAN SCRIPTS
### Body

{
    "coursecode": "{{coursecode}}",
    "name": "{{coursename}}",
    "credit": "{{credit}}",
    "grade" : "{{grade}}",
    "year": "{{year}}",
    "sem": "{{semester}}"
}

### Pre-request Script

let coursecodes = pm.collectionVariables.get("coursecodes");
let coursenames = pm.collectionVariables.get("coursenames");
let credits = pm.collectionVariables.get("credits");
let grades = pm.collectionVariables.get("grades");
let years = pm.collectionVariables.get("years");
let semesters = pm.collectionVariables.get("semesters");

if(!coursecodes || coursecodes.length == 0) {
    coursecodes = ["SC1003","SC1004","SC1005"];
    coursenames = ["INTRODUCTION TO COMPUTATIONAL THINKING & PROGRAMMING", "LINEAR ALGEBRA FOR COMPUTING", "DIGITAL LOGIC"];
    credits = [3,3,3];
    grades= ["A","A","A+"];
    years= [1,1,1];
    semesters= [ 1,1,1];
}

let currentCoursecode = coursecodes.shift();
let currentCoursename = coursenames.shift();
let currentCredit = credits.shift();
let currentGrade = grades.shift();
let currentYear = years.shift();
let currentSemester = semesters.shift();

pm.collectionVariables.set("coursecode", currentCoursecode);
pm.collectionVariables.set("coursecodes", coursecodes);
pm.collectionVariables.set("coursename", currentCoursename);
pm.collectionVariables.set("coursenames", coursenames);
pm.collectionVariables.set("credit", currentCredit);
pm.collectionVariables.set("credits", credits)
pm.collectionVariables.set("grade", currentGrade);
pm.collectionVariables.set("grades", grades);
pm.collectionVariables.set("year", currentYear);
pm.collectionVariables.set("years", years);
pm.collectionVariables.set("semester", currentSemester);
pm.collectionVariables.set("semesters", semesters);

### Tests
const coursecodes = pm.collectionVariables.get("coursecodes");
const coursenames = pm.collectionVariables.get("coursenames");
const credits = pm.collectionVariables.get("credits");
const grades = pm.collectionVariables.get("grades");
const years = pm.collectionVariables.get("years");
const semesters = pm.collectionVariables.get("semesters");

if (coursecodes && coursecodes.length > 0){
    postman.setNextRequest("addCourse");
} else {
    postman.setNextRequest(null);
}

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});