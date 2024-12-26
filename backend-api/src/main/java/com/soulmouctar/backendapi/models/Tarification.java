package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tarification")
public class Tarification {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private double prix;

    @ManyToOne
    private Pays pays;

    @ManyToOne
    private Product product;

//    private LocalDateTime createdAt;
//    private LocalDateTime updatedAt;

    public Tarification(Long id, String description, double prix, Pays pays, Product product) {
        this.id = id;
        this.description = description;
        this.prix = prix;
        this.pays = pays;
        this.product = product;
    }

    public Tarification() {

    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public double getPrix() {
        return prix;
    }

    public Pays getPays() {
        return pays;
    }

    public Product getProduct() {
        return product;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public void setPays(Pays pays) {
        this.pays = pays;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}

