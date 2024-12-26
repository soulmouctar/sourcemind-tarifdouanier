package com.soulmouctar.backendapi.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@NoArgsConstructor
@Setter
@Getter
@Table(name = "users")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Size(max = 20)
    @Column(name = "username")
    private String userName;
//
//    @Size(max = 20)
//    @Column(name = "name")
//    private String name;
//    @NotBlank
//    @Size(max = 50)
//    @Email
//    @Column(name = "email")
//    private String email;

    @Setter
    @Getter
    @Size(max = 120)
    @Column(name = "password")
    private String password;

//    private boolean accountNonLocked = true;
//    private boolean accountNonExpired = true;
//    private boolean credentialsNonExpired = true;
    @Setter
    @Getter
    private boolean enabled = true;
//
//    private LocalDate credentialsExpiryDate;
//    private LocalDate accountExpiryDate;
//
//    private String twoFactorSecret;
//    private boolean isTwoFactorEnabled = false;
//    private String signUpMethod;
//
//    @CreationTimestamp
//    @Column(updatable = false)
//    private LocalDateTime createdDate;
//
//    @UpdateTimestamp
//    private LocalDateTime updatedDate;

    public User(Long id,String username, String password) {
        this.id = id;
        this.userName = username;
        this.password = password;
    }

    public String getUsername() {
        return userName;
    }

    public void setUsername(String username) {
        this.userName = username;
    }

}