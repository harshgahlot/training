package com.mindspring.restapi.service;

import com.mindspring.restapi.models.User;
import com.mindspring.restapi.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo repo;
    @Override
    public User addUser(User user) {
        return repo.save(user);
    }

    @Override
    public List<User> getAll() {
        return repo.findAll();
    }

    @Override
    public User getUserById(int id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public boolean deleteById(int id) {
        if (getUserById(id)!=null){
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public User updateById(User user, int id) {

        User olsUser=getUserById(id);
        if(olsUser!=null){
            olsUser.setName(user.getName());
            olsUser.setEmail(user.getEmail());
            olsUser.setCountry(user.getCountry());
            return repo.save(olsUser);

        }
        return null;
    }
}
