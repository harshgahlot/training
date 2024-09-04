package com.mindspring.restapi.repo;

import com.mindspring.restapi.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Long> {
}
