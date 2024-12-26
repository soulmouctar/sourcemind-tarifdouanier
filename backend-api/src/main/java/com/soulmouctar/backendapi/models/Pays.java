package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

@Entity
public class Pays {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "pays")
    private List<Tarification> tarifications;

    public Pays(Long id, String name, List<Tarification> tarifications) {
        this.id = id;
        this.name = name;
        this.tarifications = tarifications;
    }

    public Long getId() {
        return id;
    }

    public List<Tarification> getTarifications() {
        return tarifications;
    }

    public Pays() {}

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
