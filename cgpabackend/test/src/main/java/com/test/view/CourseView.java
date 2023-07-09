package com.test.view;
import java.util.List;

import com.test.model.Course;
public interface CourseView {
    public Course saveCourse(Course course);

    public List<Course> getAllCourses();
}
