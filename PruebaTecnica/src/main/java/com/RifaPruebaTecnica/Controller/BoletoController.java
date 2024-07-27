package com.RifaPruebaTecnica.Controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RifaPruebaTecnica.DTO.BoletoDTO;
import com.RifaPruebaTecnica.Model.Boleto;
import com.RifaPruebaTecnica.Repositories.BoletoRepository;
import com.RifaPruebaTecnica.Repositories.RifaRepository;
import com.RifaPruebaTecnica.Repositories.UsuarioRepository;

@RestController
@RequestMapping("/Boleto")
public class BoletoController {
	@Autowired
    private BoletoRepository boletoRepository;

    @Autowired
    private RifaRepository rifaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/findAll")
    public List<BoletoDTO> getAll() {
        List<Boleto> boletos = boletoRepository.findAll();
        return boletos.stream()
                      .map(this::convertToDTO)
                      .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoletoDTO> getById(@PathVariable Long id) {
        Optional<Boleto> boleto = boletoRepository.findById(id);
        return boleto.map(this::convertToDTO)
                     .map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/")
    public BoletoDTO createEntity(@RequestBody BoletoDTO boletoDTO) {
        Boleto boleto = convertToEntity(boletoDTO);
        Boleto savedBoleto = boletoRepository.save(boleto);
        return convertToDTO(savedBoleto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoletoDTO> updateEntity(@PathVariable Long id, @RequestBody BoletoDTO boletoDTO) {
        if (!boletoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        Boleto boleto = convertToEntity(boletoDTO);
        boleto.setId(id);
        Boleto updatedBoleto = boletoRepository.save(boleto);
        return ResponseEntity.ok(convertToDTO(updatedBoleto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntity(@PathVariable Long id) {
        if (!boletoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        boletoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private BoletoDTO convertToDTO(Boleto boleto) {
        BoletoDTO dto = new BoletoDTO();
        dto.setId(boleto.getId());
        dto.setNumero(boleto.getNumero());
        dto.setRifaId(boleto.getRifa().getId());
        dto.setUsuarioId(boleto.getUsuario().getId());
        return dto;
    }

    private Boleto convertToEntity(BoletoDTO boletoDTO) {
        Boleto boleto = new Boleto();
        boleto.setId(boletoDTO.getId());
        boleto.setNumero(boletoDTO.getNumero());
        boleto.setRifa(rifaRepository.findById(boletoDTO.getRifaId()).orElse(null));
        boleto.setUsuario(usuarioRepository.findById(boletoDTO.getUsuarioId()).orElse(null));
        return boleto;
    }
}
