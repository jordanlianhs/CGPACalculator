package com.test.service;

import com.test.model.Course;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourseService {
    
    // Method to calculate the total credits of all courses
    public int getTotalCredits(List<Course> courses) {
        int totalCredits = 0;
        for (Course course : courses) {
            totalCredits += course.getCredit();
        }
        return totalCredits;
    }

    // Method to calculate CGPA
    public float calculateCGPA(List<Course> courses) {
        float totalCreditsGrade = 0;
        int totalCredits = getTotalCredits(courses);
        for (Course course : courses) {
            totalCreditsGrade += course.getCredit() * convertGrade(course.getGrade());
        }
        if (totalCredits == 0) {
            return 0;
        }
        return totalCreditsGrade / totalCredits;
    }

    // Helper method to convert the grade to GPA
    private float convertGrade(String grade) {
        // Implement your grade to GPA conversion logic here
        // For simplicity, I'll leave it as it is
        // You can update it based on your grade scale
        switch (grade) {
            case "A+":
                return 5.0f;
            case "A":
                return 5.0f;
            case "A-":
                return 4.5f;
            case "B+":
                return 4.0f;
            // Add more cases for other grades
            default:
                return 0.0f;
        }
    }
}
