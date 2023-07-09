package com.test.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
    private String coursecode;
    private String name;
    private int credits;
    private String grade;
    private int year;
    private int sem;

    public Course() {
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCoursecode() {
        return coursecode;
    }
    public void setCoursecode(String coursecode) {
        this.coursecode = coursecode;
    }
    public int getCredits() {
        return credits;
    }
    public void setCredits(int credits) {
        this.credits = credits;
    }

    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }

    public int getYear() {
        return year;
    }
    public void setYear(int year) {
        this.year = year;
    }

    public int getSem() {
        return sem;
    }
    public void setSem(int sem) {
        this.sem = sem;
    }

    /* 
    public int getTotalcurrentcredits() {
        return totalcurrentcredits;
    }
    public void setTotalcurrentcredits(int totalcurrentcredits) {
        
        for(Course course : courses){
            if(course.getGrade().equals("U")){
                continue;
            }
            totalcurrentcredits += course.getCredits();
        }
    }

    public int getTotalcreditstograd() {
        return totalcreditstograd;
    }

    public void setTotalcreditstograd(int totalcreditstograd) {
        this.totalcreditstograd = totalcreditstograd;
    }

    public float convertGrade(String grade){
        switch(grade){
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
            default:
                return 0.0f;
        }
    }

    public float getCGPA(){
        float cgpa = 0;
        for(Course course : courses){
            cgpa += course.getCredits() * convertGrade(course.getGrade());
        }
        return cgpa;
    }

    public float getSGPA(int year, int sem){
        float sgpa = 0;
        for (Course course : courses){
            if(course.getYear() == year && course.getSem() == sem){
                sgpa += course.getCredits() * convertGrade(course.getGrade());
            }
        }
        return sgpa;
    }
    */

    
}
