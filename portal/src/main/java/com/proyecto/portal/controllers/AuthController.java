package com.proyecto.portal.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.portal.models.UsuarioModel;
import com.proyecto.portal.services.UsuarioService;
import com.proyecto.portal.utils.JWTUtil;

@RestController
public class AuthController {
    
    @Autowired
    UsuarioService usuarioService;

    @Autowired
    private JWTUtil jwtUtil;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/login")
    @PostMapping
    public ResponseEntity<Map<String, Object>> login(@RequestBody UsuarioModel usuario) {
      UsuarioModel usuarioLogueado = usuarioService.obtenerUsuarioPorCredenciales(usuario);
  
      if (usuarioLogueado != null) {
        String token = jwtUtil.create(String.valueOf(usuarioLogueado.getUser_id()), usuarioLogueado.getEmail());
        usuarioLogueado.setContrasena("");
        Map<String, Object> response = new HashMap<>();
        response.put("usuario", usuarioLogueado);
        response.put("token", token);
        return new ResponseEntity<>(response, HttpStatus.OK);
      } else {
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
      }
    }

}
