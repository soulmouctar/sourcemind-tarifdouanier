package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Product;
import com.soulmouctar.backendapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
//@CrossOrigin
public class ProductController {

    final ProductRepository repo;

    public ProductController(ProductRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    @GetMapping(headers = "/{id}", consumes = {"application/json"})
    public Optional<Product> getProduct(@PathVariable("id") Long id) {
        return Optional.of(repo.findById(id).get());
    }

    @PostMapping(value = "/", consumes = {"application/json"})
    public Product createProduct(@RequestBody Product product) {
        return repo.save(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestBody Product product) {
        // Vérifier si le produit existe
        Product produit = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé avec l'id : " + id));

        // Mettre à jour les informations du produit
        produit.setName(product.getName());
        produit.setDescription(product.getDescription());

        // Sauvegarder les modifications
        return repo.save(produit);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        repo.deleteById(id);
    }

}
