package com.proyecto.portal.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.portal.models.PerfilModel;
import com.proyecto.portal.repositories.PerfilRepository;

@Service
public class PerfilService {
    @Autowired
    PerfilRepository perfilRepository;

    public ArrayList<PerfilModel> obtenerPerfiles(){
       return (ArrayList<PerfilModel>) perfilRepository.findAll();
    }

    public PerfilModel guardarPerfil(PerfilModel perfil){
       return perfilRepository.save(perfil);
    }
}
