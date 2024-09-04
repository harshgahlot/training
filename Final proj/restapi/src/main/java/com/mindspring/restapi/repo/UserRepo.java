package com.mindspring.restapi.repo;

import com.mindspring.restapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
