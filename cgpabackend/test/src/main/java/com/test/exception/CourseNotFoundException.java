package com.test.exception;

public class CourseNotFoundException extends RuntimeException{
    public CourseNotFoundException(String coursecode){
        super("Could not find course with coursecode: "+coursecode);
    }
}
