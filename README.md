# CGPACalculator 
Calculates CGPA and SGPA for NTU Students  

## Backend: springboot commands within cgpabackend 
In application.properties, CGPACalculator/cgpabackend/test/src/main/resources/application.properties, make sure to configure the datasource to your database. </br>
mvn clean install -DskipTests </br>
mvn spring-boot:run

## Frontend: npm commands within cgpafrontend
npx create-react-app cgpafrontend </br>
npm install </br>
npm start </br>

## Model
Below is the UML Class Diagram of the structure of my Course Model along with the controllers, services and repository
![Model Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/model.png)

## How to use

