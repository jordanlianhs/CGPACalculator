package com.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.Course;
import com.test.repository.CourseRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CourseController{

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/addCourse")
    Course newCourse(@RequestBody Course newCourse){
        return courseRepository.save(newCourse);
    }

    @GetMapping("/getCourses")
    List<Course> getCourses(){
        return courseRepository.findAll();
    }
}

