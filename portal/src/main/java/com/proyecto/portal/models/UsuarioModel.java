package com.proyecto.portal.models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "Users")
public class UsuarioModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    @Getter @Setter
    private Long user_id;

    @Getter @Setter
    private String usuario;

    @Getter @Setter
    private String contrasena;

    @Getter @Setter
    private String email;

    @Getter @Setter
    private int tipo_usuario;

}
