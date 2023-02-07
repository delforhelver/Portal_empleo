package com.proyecto.portal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.portal.models.UsuarioModel;
import com.proyecto.portal.repositories.UsuarioRepository;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

@Service
public class UsuarioService {

@Autowired
UsuarioRepository usuarioRepository;

public UsuarioModel getUsuario(Long user_id){
  return usuarioRepository.findById(user_id).get();
}

public UsuarioModel getUserByEmail(String email){
  return usuarioRepository.findUserByEmail(email);
}

public UsuarioModel guardarUsuario(UsuarioModel usuario){

  Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
  String hash = argon2.hash(1, 1024, 1, usuario.getContrasena());
  usuario.setContrasena(hash);
  return usuarioRepository.save(usuario);
}

public UsuarioModel obtenerUsuarioPorCredenciales(UsuarioModel usuario) {
  UsuarioModel usuarioDB = usuarioRepository.findUserByEmail(usuario.getEmail());

  if (usuarioDB == null) {
      return null;
  }

  String passwordHashed = usuarioDB.getContrasena();

  Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
  if (argon2.verify(passwordHashed, usuario.getContrasena())) {
      return usuarioDB;
  }

  return null;
}


}
