package com.proyecto.portal.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.portal.models.TechModel;
import com.proyecto.portal.services.TechService;

@RestController
@RequestMapping("/technologies")
public class TechController {
   
    @Autowired
   TechService techService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ArrayList<TechModel> obtenerPerfiles(){
        return techService.obtenerTecnologias();   
    }
}
