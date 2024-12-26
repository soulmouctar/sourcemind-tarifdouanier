package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;

import java.util.List;


@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String code;
    private String description;

    @ManyToOne
    private Category category;

    @OneToMany(mappedBy = "product")
    private List<Tarification> tarification;

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
