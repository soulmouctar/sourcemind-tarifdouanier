package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Tarification;
import com.soulmouctar.backendapi.repositories.TarificationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarification")
@CrossOrigin
public class TarificationController {

    final TarificationRepository tarificationRepository;

    public TarificationController(TarificationRepository tarificationRepository) {
        this.tarificationRepository = tarificationRepository;
    }

    @GetMapping
    public List<Tarification> getAllTarifications() {
        return tarificationRepository.findAll();
    }

    @PutMapping(value = "/{id}", consumes = {"application/json"})
    public Tarification updateTarification(@PathVariable("id") Long id, @RequestBody Tarification tarification) {
        tarification.setId(id);
        return tarificationRepository.save(tarification);
    }

    @PostMapping
    public Tarification createTarification(@RequestBody Tarification tarification) {
        return tarificationRepository.save(tarification);
    }


}
