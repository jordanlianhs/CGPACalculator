package com.test.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ControllerAdvice
public class UserNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(CourseNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(CourseNotFoundException exception){

        Map <String,String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }
}
