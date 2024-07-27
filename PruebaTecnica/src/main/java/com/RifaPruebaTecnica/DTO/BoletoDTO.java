package com.RifaPruebaTecnica.DTO;

import lombok.Data;

@Data
public class BoletoDTO {
    private Long id;
    private Integer numero;
    private Long rifaId;
    private Long usuarioId;
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
	public Long getRifaId() {
		return rifaId;
	}
	public void setRifaId(Long rifaId) {
		this.rifaId = rifaId;
	}
	public Long getUsuarioId() {
		return usuarioId;
	}
	public void setUsuarioId(Long usuarioId) {
		this.usuarioId = usuarioId;
	}
    
}