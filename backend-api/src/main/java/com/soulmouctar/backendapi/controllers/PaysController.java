package com.soulmouctar.backendapi.controllers;

import com.soulmouctar.backendapi.models.Pays;
import com.soulmouctar.backendapi.repository.PaysRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pays")
public class PaysController {
    @Autowired
    private PaysRepository paysRepository;

    @GetMapping
    public Iterable<Pays> getAllPays() {
        return paysRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pays getPays(@PathVariable("id") Long id) {
        return paysRepository.findById(id).get();
    }

    @PostMapping()
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
