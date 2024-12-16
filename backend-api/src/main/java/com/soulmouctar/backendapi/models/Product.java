package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;


@Entity
public class Product {
    @Id
    private Long id;
    private String name;
    private String code;
    private String description;
    @ManyToOne
    private Category category;

    public Product(Long id, String name, String description, String code, Category category) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.category = category;
    }

    public Product() {}

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCatergory_id(Category category) {
        this.category = category;
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

    public String getCategory() {
        return category.getName();
    }


}
