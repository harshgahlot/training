package com.mindspring.restapi.service;

import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.models.Student;
import com.mindspring.restapi.models.User;
import com.mindspring.restapi.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepo  repo;

    public Course addCourse(Course course){
        return repo.save(course);
    }
    public List<Course> getAllCourses(){
        return repo.findAll();
    }
    public Course getById(Long id){
        return repo.findById(id).orElse(null);
    }
    public Course updateById(Course course, Long id) {

        Course oldcourse=getById(id);
        if(oldcourse!=null){
            oldcourse.setTitle(course.getTitle());
            oldcourse.setDescription(course.getDescription());
            oldcourse.setPrice(course.getPrice());
            oldcourse.setUrl(course.getUrl());
            return repo.save(oldcourse);

        }
        return null;
    }


}
