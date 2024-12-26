package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
public class Pays {
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

    public Pays() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Tarification> getTarifications() {
        return tarifications;
    }

    @Override
    public String toString() {
        return "Pays{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", tarifications=" + tarifications +
                '}';
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTarifications(List<Tarification> tarifications) {
        this.tarifications = tarifications;
    }
}
