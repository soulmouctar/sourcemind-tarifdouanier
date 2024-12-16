package com.soulmouctar.backendapi.repository;

import com.soulmouctar.backendapi.models.Tarification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarificationRepository  extends JpaRepository<Tarification, Long> {
}
