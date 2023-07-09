package com.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.Course;
import com.test.view.CourseView;

@RestController
@RequestMapping("/course")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseView courseView;

    @PostMapping("/add")
    public String add(@RequestBody Course course) {
        courseView.saveCourse(course);
        return "New course is added to the database.";
    }

    @GetMapping("/getAll")
    public List<Course> getAll() {
        return courseView.getAllCourses();
    }
}
