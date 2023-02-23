package com.proyecto.portal.repositories;

import org.springframework.data.repository.CrudRepository;

import com.proyecto.portal.models.TechModel;

public interface TechRepository extends CrudRepository<TechModel, Long> {
    
}
