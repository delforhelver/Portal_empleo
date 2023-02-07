package com.proyecto.portal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.portal.models.UsuarioModel;
import com.proyecto.portal.services.UsuarioService;

@RestController
public class AuthController {
    
    @Autowired
    UsuarioService usuarioService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/login")
    @PostMapping
    public String login(@RequestBody UsuarioModel usuario) {
      UsuarioModel usuarioLogueado = usuarioService.obtenerUsuarioPorCredenciales(usuario);
      
      if (usuarioLogueado != null) {
        return "ENCONTRO"; }
      else{
        return "NO ENCONTRO";
      }


    }

}
