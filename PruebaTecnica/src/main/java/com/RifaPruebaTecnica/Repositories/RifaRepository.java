package com.RifaPruebaTecnica.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.RifaPruebaTecnica.Model.Rifa;

@Repository
public interface RifaRepository extends JpaRepository<Rifa, Long>{

}
