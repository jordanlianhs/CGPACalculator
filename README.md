# CGPACalculator 
Calculates CGPA and SGPA for **NTU** Students for any University with a CAP of 5.0..... sorry SMU

## Software requirements
Java version: 20.0.1
Apache Maven 3.9.2
node v20.2.0
npm 9.6.6

I will be looking to host this on a platform for the frontend and backend :), its a WIP but what I intend is to use githubpages for the frontend and maybe heroku and firebase for the backend~
If you have any suggestions do feel free to lmk

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

Next you can key in your total credits to graduate, as for me, I have 135 credits! Once keyed in, react saves it in the local storage so once you refresh, the value will persist.
![No Course Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img1.png)

1. To add courses, I would recommend adding all the courses in a go. This is done by using the `Convert HTML of Courses to JSON` and  `Add Course Via JSON` buttons on the navigation bar.
!!! THIS ONLY WORKS FOR NTU CORS headers prevents me from reading data from another website hence mass adding courses is only configured for NTU peeps as I'm from NTU ya. For other schools, please use the `Add Courses`/`Add Course` function on the Nav bar
  a. Click on the bar `Convert HTML of Courses to JSON`
    ![2c_0 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2c_0.png)
  b. Naviagate to your [NTU Degree Audit Website](https://wish.wis.ntu.edu.sg/pls/webexe/ldap_login.login?w_url=https://wish.wis.ntu.edu.sg/pls/webexe/dars_result_ro.main_display)
    ![2c_1 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2c_1.png)
  c. Hit Ctrl + Shift + I for windows or Fn + F12 for mac to go into inspect element. Hit Ctrl + F / Cmd + F in the elements tab. Search for /html/body/div[3]/div/div/section[2]/div/div/center/font[3] in the XPath or the element that contains all the information about your courses. Right click the element and `Copy element/Copy outerHTML`
    ![2c_2 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2c_2.png)
  d. Paste it into the HTML input box, hit convert to JSON and copy the geenrated json for the courses
    ![2c_3 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2c_3.png)
  e. Paste the generated JSON into the `Add Course Via JSON` button on the navigation bar.
    ![2c_4 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2c_4.png)
  f. Tada all courses are implemented
    ![2c_5 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2c_5.png)

The other alternative ways to add courses are either to use `Add Courses`/`Add Course`

2. `Add Courses` will allow you to add multiple courses while under the Added Courses, you can see the history of courses you have added
![2b Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2b.png)

3. `Add Course` will add one course before directing you back to the home page
![2a Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img2a.png)

4. `View Course` will view the selected course
![3_Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img3.png)

5. `Edit Course` will allow the user to edit information about the course. Editing the course code means we have to delete the course
![4 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img4.png)

6. `Delete Course` will allow the user to delete the selected course
![5 Image](https://github.com/jordanlianhs/CGPACalculator/blob/main/images/Img5.png)







