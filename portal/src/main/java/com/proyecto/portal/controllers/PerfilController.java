package com.proyecto.portal.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.portal.models.PerfilModel;
import com.proyecto.portal.services.PerfilService;

@RestController
@RequestMapping("/perfil")
public class PerfilController {
    @Autowired

    PerfilService perfilService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ArrayList<PerfilModel> obtenerPerfiles(){
        return perfilService.obtenerPerfiles();   
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public PerfilModel guardarPerfil(@RequestBody PerfilModel perfil){
        return this.perfilService.guardarPerfil(perfil);
    }
}
