package com.soulmouctar.backendapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.soulmouctar.backendapi.models.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Méthode de recherche par chaîne de caractères (nom ou description)
    List<Product> findByNomContainingOrDescriptionContaining(String nom, String description);

}
