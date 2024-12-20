package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Pays {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "pays")
    private List<Tarification> tarifications;

    public Pays(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Pays() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
