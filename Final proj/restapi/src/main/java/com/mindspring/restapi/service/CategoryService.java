package com.mindspring.restapi.service;

import com.mindspring.restapi.models.Category;
import com.mindspring.restapi.repo.CategoryRepo;
import jdk.dynalink.linker.LinkerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo repo;

    public Category addCategory(Category category){
        return repo.save(category);
    }
    public List<Category> getAllCategory(){
        return repo.findAll();
    }
}
