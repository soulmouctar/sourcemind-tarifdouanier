package com.soulmouctar.backendapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Utilisateur {
    @Id
    private Long id;
    private String username;
    private String password;
}
