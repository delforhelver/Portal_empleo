package com.proyecto.portal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.portal.models.UsuarioModel;
import com.proyecto.portal.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    UsuarioService usuarioService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/{user_id}")
    @GetMapping()
    public UsuarioModel obtenerUsuario(@PathVariable Long user_id){
      return usuarioService.getUsuario(user_id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/email/{email}")
    @GetMapping()
    public UsuarioModel getUsuarioEmail(@PathVariable String email){
      return usuarioService.getUserByEmail(email);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel perfil){
        return this.usuarioService.guardarUsuario(perfil);
    }
}
