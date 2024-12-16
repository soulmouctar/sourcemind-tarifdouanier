package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Category;
import com.soulmouctar.backendapi.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/categoy")
public class CategoryController {
    final
    CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/all")
    public List<Category> getCategories() {
        return this.categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Category> getCategory(@PathVariable("id") Long id) {
        return Optional.of(this.categoryRepository.findById(id).get());
    }
}
