package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Pays;
import com.soulmouctar.backendapi.repositories.PaysRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pays")
@CrossOrigin
public class PaysController {

    final PaysRepository paysRepository;

    public PaysController(PaysRepository paysRepository) {
        this.paysRepository = paysRepository;
    }

    @GetMapping
    public List<Pays> getAllPays() {
        return paysRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pays getPays(@PathVariable("id") Long id) {
        return paysRepository.findById(id).get();
    }

    @PostMapping// (value = "/" , consumes = {"application/json"})
    public Pays createPays(@RequestBody Pays pays) {
        return paysRepository.save(pays);
    }

    @PutMapping("/{id}")
    public Pays updatePays(@PathVariable("id") Long id, @RequestBody Pays pays) {
        pays.setId(id);
        return paysRepository.save(pays);
    }

    @DeleteMapping("/{id}")
    public void deletePays(@PathVariable("id") Long id) {
        paysRepository.deleteById(id);
    }
}
