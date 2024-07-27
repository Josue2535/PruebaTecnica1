package com.RifaPruebaTecnica.Controller;

import java.util.Date;
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

import com.RifaPruebaTecnica.DTO.RifaDTO;
import com.RifaPruebaTecnica.Model.Rifa;
import com.RifaPruebaTecnica.Repositories.RifaRepository;
import com.RifaPruebaTecnica.Repositories.UsuarioRepository;


@RestController
@RequestMapping("/rifa")
public class RifaController {
	
	@Autowired
    private RifaRepository rifaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping("/findAll")
    public List<RifaDTO> getAll() {
        List<Rifa> rifas = rifaRepository.findAll();
        return rifas.stream()
                    .map(this::convertToDTO)
                    .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RifaDTO> getById(@PathVariable Long id) {
        Optional<Rifa> rifa = rifaRepository.findById(id);
        return rifa.map(this::convertToDTO)
                   .map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/")
    public RifaDTO createEntity(@RequestBody RifaDTO rifaDTO) {
        Rifa rifa = convertToEntity(rifaDTO);
        rifa.setFechaCreacion(new Date());
        rifa.setFechaFinalizacion(new Date());
        Rifa savedRifa = rifaRepository.save(rifa);
        return convertToDTO(savedRifa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RifaDTO> updateEntity(@PathVariable Long id, @RequestBody RifaDTO rifaDTO) {
        if (!rifaRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        Rifa rifa = convertToEntity(rifaDTO);
        rifa.setId(id);
        Rifa updatedRifa = rifaRepository.save(rifa);
        return ResponseEntity.ok(convertToDTO(updatedRifa));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntity(@PathVariable Long id) {
        if (!rifaRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        rifaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/status")
    public String status() {
        return "Up and Running";
    }

    private RifaDTO convertToDTO(Rifa rifa) {
        RifaDTO dto = new RifaDTO();
        dto.setId(rifa.getId());
        dto.setNombre(rifa.getNombre());
        dto.setDescripcion(rifa.getDescripcion());
        dto.setFechaCreacion(rifa.getFechaCreacion());
        dto.setFechaFinalizacion(rifa.getFechaFinalizacion());
        if (rifa.getUsuario() != null) {
            dto.setUsuarioId(rifa.getUsuario().getId());
        }
        return dto;
    }

    private Rifa convertToEntity(RifaDTO rifaDTO) {
        Rifa rifa = new Rifa();
        rifa.setId(rifaDTO.getId());
        rifa.setNombre(rifaDTO.getNombre());
        rifa.setDescripcion(rifaDTO.getDescripcion());
        rifa.setFechaCreacion(rifaDTO.getFechaCreacion());
        rifa.setFechaFinalizacion(rifaDTO.getFechaFinalizacion());
        if (rifaDTO.getUsuarioId() != null) {
            rifa.setUsuario(usuarioRepository.findById(rifaDTO.getUsuarioId()).orElse(null));
        }
        return rifa;
    }
	 
	 
}
