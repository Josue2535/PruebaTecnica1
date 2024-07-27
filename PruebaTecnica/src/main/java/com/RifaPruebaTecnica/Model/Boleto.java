package com.RifaPruebaTecnica.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="BOLETO")

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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public Rifa getRifa() {
		return rifa;
	}

	public void setRifa(Rifa rifa) {
		this.rifa = rifa;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
    
}
