package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Tarification;
import com.soulmouctar.backendapi.repository.TarificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/api/tarification")
public class TarificationController {
    @Autowired
    private TarificationRepository tarificationRepository;

    @GetMapping
    public List<Tarification> getAllTarifications() {
        return tarificationRepository.findAll();
    }


}
