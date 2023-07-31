# CGPACalculator 
Calculates CGPA and SGPA for NTU Students  

## Software requirements
Java version: 20.0.1
Apache Maven 3.9.2
node v20.2.0
npm 9.6.6

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
After loading into the the application hosted on localhost:3000, you will be greeted with an empty course page with no courses. 
![No Course Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img0.png)

