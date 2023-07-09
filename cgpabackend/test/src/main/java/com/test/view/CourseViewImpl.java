package com.test.view;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.model.Course;
import com.test.repository.CourseRepository;

@Service
public class CourseViewImpl implements CourseView {
    
    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }    
}
