package com.proyecto.portal.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.portal.models.PerfilModel;

@Repository
public interface PerfilRepository extends CrudRepository<PerfilModel, Long> {
    
}
