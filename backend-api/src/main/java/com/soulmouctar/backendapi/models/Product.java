package com.soulmouctar.backendapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Product {
    @Id
    private Long id;
    private String name;
    private String description;

//    @OneToMany(mappedBy = "category")
//    private Set<Category> recordings = new HashSet<>();
    private String catergory_id;

    public Product(Long id, String name, String description, String catergory_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.catergory_id = catergory_id;
    }

    public Product() {}

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCatergory_id(String catergory_id) {
        this.catergory_id = catergory_id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getCatergory_id() {
        return catergory_id;
    }


}
