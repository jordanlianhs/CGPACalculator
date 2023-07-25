package com.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.exception.CourseNotFoundException;
import com.test.model.Course;
import com.test.repository.CourseRepository;
import com.test.service.CourseService;

@RestController
@CrossOrigin("http://localhost:3000")
public class CourseController{

    private final CourseService courseService;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    public CourseController(CourseService courseService){
        this.courseService = courseService;
    }

    @PostMapping("/addCourses")
    List<Course> newCourses(@RequestBody List<Course> newCourses) {
        return courseRepository.saveAll(newCourses);
    }

    @PostMapping("/addCourse")
    Course newCourse(@RequestBody Course newCourse) {
        return courseRepository.save(newCourse);
    }

    @GetMapping("/getCourses")
    List<Course> getCourses(){
        return courseRepository.findAll();
    }

    @GetMapping("/getCourse/{coursecode}")
    Course getCourse(@PathVariable String coursecode){
        return courseRepository.findById(coursecode)
        .orElseThrow(()->new CourseNotFoundException(coursecode));
    }

    @PutMapping("/updateCourse/{coursecode}")
    Course updateCourse(@RequestBody Course newCourse, @PathVariable String coursecode){
        return courseRepository.findById(coursecode)
        .map(course->{
            course.setCoursecode(newCourse.getCoursecode());
            course.setName(newCourse.getName());
            course.setCredit(newCourse.getCredit());
            course.setGrade(newCourse.getGrade());
            course.setYear(newCourse.getYear());
            course.setSem(newCourse.getSem());
            return courseRepository.save(course);
        }).orElseThrow(()->new CourseNotFoundException(coursecode));
    }

    @DeleteMapping("/deleteCourse/{coursecode}")
    String deleteCourse(@PathVariable String coursecode){
        if(!courseRepository.existsById(coursecode)){
            throw new CourseNotFoundException(coursecode);
        }
        courseRepository.deleteById(coursecode);
        return "User with id " + coursecode + " has been deleted successfully";
    }

    @GetMapping("/getTotalCredits")
    int getTotalCredits(){
        List<Course> courses = courseRepository.findAll();
        return courseService.getTotalCredits(courses);
    }

    @GetMapping("/calculateCGPA")
    float calculateCGPA(){
        List<Course> courses = courseRepository.findAll();
        return courseService.calculateCGPA(courses);
    }

    @GetMapping("/calculateSGPA/{year}/{sem}")
    float calculateSGPAForYearAndSemester(@PathVariable int year, @PathVariable int sem) {
        List<Course> courses = courseRepository.findAll();
        return courseService.calculateSGPA(courses, year, sem);
    }

    @GetMapping("/calculateSCredit/{year}/{sem}")
    float calculateSCreditForYearAndSemester(@PathVariable int year, @PathVariable int sem) {
        List<Course> courses = courseRepository.findAll();
        return courseService.calculateSCredit(courses, year, sem);
    }
}

