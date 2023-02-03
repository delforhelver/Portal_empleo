package com.proyecto.portal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.portal.models.UsuarioModel;
import com.proyecto.portal.services.UsuarioService;

@RestController
public class UsuarioController {
    
    @Autowired
    UsuarioService usuarioService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "usuario/{user_id}")
    @GetMapping
    public UsuarioModel obtenerUsuario(@PathVariable Long user_id){
      return usuarioService.getUsuario(user_id);
    }
}
