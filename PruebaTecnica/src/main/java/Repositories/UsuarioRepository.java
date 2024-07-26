package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RifaPruebaTecnica.Model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
