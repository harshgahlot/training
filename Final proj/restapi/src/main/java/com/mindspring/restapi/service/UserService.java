package com.mindspring.restapi.service;

import com.mindspring.restapi.models.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);
    public List<User> getAll();
    public User getUserById(int id);
    public boolean deleteById(int id);
    public User updateById(User user,int id);

}
