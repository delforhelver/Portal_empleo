package com.proyecto.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.portal.models.UsuarioModel;
import com.proyecto.portal.repositories.UsuarioRepository;

@Service
public class UsuarioService {
    
@Autowired
UsuarioRepository usuarioRepository;

public UsuarioModel getUsuario(Long user_id){
  return usuarioRepository.findById(user_id).get();
}

}
