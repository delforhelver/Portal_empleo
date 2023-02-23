package com.proyecto.portal.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.portal.models.TechModel;
import com.proyecto.portal.repositories.TechRepository;

@Service
public class TechService {
    @Autowired
    TechRepository techRepository;

    public ArrayList<TechModel> obtenerTecnologias(){
        return (ArrayList<TechModel>) techRepository.findAll();
     }
}
