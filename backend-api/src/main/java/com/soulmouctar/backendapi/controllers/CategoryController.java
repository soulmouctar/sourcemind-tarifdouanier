package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Category;
import com.soulmouctar.backendapi.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/categoy")

public class CategoryController {
    @Autowired
    final CategoryRepository categoryRepository;

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

    @PostMapping("/create")
    public Category createCategory(@RequestBody Category category) {
        return this.categoryRepository.save(category);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable("id") Long id, @RequestBody Category category) {
        category.setId(id);
        return this.categoryRepository.save(category);
    }
}
