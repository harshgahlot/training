package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Student;
import com.mindspring.restapi.models.User;
import com.mindspring.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentService service;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudent(){
        return ResponseEntity.ok(service.getAllStudent());
    }
    @GetMapping("/add/{sid}/course/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        return new ResponseEntity<>(service.updateCourseById(cid,sid), HttpStatus.OK);

    }
    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody Student student) {
        Student stu= service.login(student);
        if (stu != null) {
            return ResponseEntity.ok(stu);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id){
        Student found=service.getById(id);
        if(found!=null){
            return ResponseEntity.ok(found);

        }
        return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
    }
}
