package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.models.Student;
import com.mindspring.restapi.models.User;
import com.mindspring.restapi.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    private CourseService service;

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourse(){
        return ResponseEntity.ok(service.getAllCourses());
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id){
        Course found=service.getById(id);
        if(found!=null){
            return ResponseEntity.ok(found);

        }
        return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
    }
    @PutMapping("{id}")
    public ResponseEntity<Object> updateById(@RequestBody Course course, @PathVariable Long id){
        Course found=service.updateById(course,id);
        if(found!=null){
            return ResponseEntity.ok(found);

        }
        return new ResponseEntity<>("Course not found",HttpStatus.NOT_FOUND);
    }

}
