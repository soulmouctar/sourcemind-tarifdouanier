package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Category;
import com.soulmouctar.backendapi.repositories.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/category")

public class CategoryController {

    final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
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
        // Vérifier si le produit existe
        Category cate = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categorie non trouvé avec l'id : " + id));

        // Mettre à jour les informations de la categorie
        category.setName(category.getName());

        // Sauvegarder les modifications
        return this.categoryRepository.save(category);
    }
}
