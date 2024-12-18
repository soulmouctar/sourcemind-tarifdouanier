package com.soulmouctar.backendapi.repository;

import com.soulmouctar.backendapi.models.Tarification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarificationRepository  extends JpaRepository<Tarification, Long> {
}
