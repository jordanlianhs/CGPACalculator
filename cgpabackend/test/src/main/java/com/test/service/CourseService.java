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

    // Method to calculate SGPA for a specific year and semester
    public float calculateSGPA(List<Course> courses, int year, int sem) {
        float sgpa = 0;
        int totalCredits = 0;

        for (Course course : courses) {
            if (course.getYear() == year && course.getSem() == sem) {
                sgpa += course.getCredit() * convertGrade(course.getGrade());
                totalCredits += course.getCredit();
            }
        }

        if (totalCredits == 0) {
            return 0;
        }

        return sgpa / totalCredits;
    }

    // Method to calculate Sem Credit for a specific year and semester
    public float calculateSCredit(List<Course> courses, int year, int sem) {
        int totalCredits = 0;

        for (Course course : courses) {
            if (course.getYear() == year && course.getSem() == sem) {
                totalCredits += course.getCredit();
            }
        }

        if (totalCredits == 0) {
            return 0;
        }

        return totalCredits;
    }

    // Helper method to convert the grade to GPA
    private float convertGrade(String grade) {
        // Implement your grade to GPA conversion logic here
        // For simplicity, I'll leave it as it is
        // You can update it based on your grade scale
        switch(grade.toUpperCase()){
            case "A+":
                return 5.0f;
            case "A":
                return 5.0f;
            case "A-":
                return 4.5f;
            case "B+":
                return 4.0f;
            case "B":
                return 3.5f;
            case "B-":
                return 3.0f;
            case "C+":
                return 2.5f;
            case "C":  
                return 2.0f;
            case "D+":
                return 1.5f;
            case "D":
                return 1.0f;
            case "F":
                return 0.0f;
            case "S":
                return 0.0f;
            case "U":
                return 0.0f;
            case "EX":
                return 5.0f;
            case "P":
                return 5.0f;
            default:
                return 0.0f;
        }
    }
}
