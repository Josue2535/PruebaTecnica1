package com.RifaPruebaTecnica.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Boleto {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer numero;
    
    @ManyToOne
    @JoinColumn(name = "rifeId")
    private Rifa rifa;
    
    @ManyToOne
    @JoinColumn(name = "usuarioId")
    private Usuario usuario;
    // getters and setters
}
