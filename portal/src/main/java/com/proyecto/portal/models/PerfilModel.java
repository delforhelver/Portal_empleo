package com.proyecto.portal.models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table (name = "Profiles")
public class PerfilModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    @Getter @Setter
    private Long id;

    @Getter @Setter
    private String nombre;

    @Getter @Setter
    private String apellido;

    @Getter @Setter
    private String telefono;

    @Getter @Setter
    private String pais;

    @Getter @Setter
    private String ciudad;

    @Getter @Setter
    private String li_link;

    
}
