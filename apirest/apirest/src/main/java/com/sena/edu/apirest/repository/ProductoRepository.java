package com.sena.edu.apirest.repository;

import java.util.List;
import java.util.Optional;
import com.sena.edu.apirest.entity.*;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductoRepository extends JpaRepository<Producto,Integer> {

    Optional<Producto> findByNombreProducto(String nombreProducto);
    Optional<Producto> findByIdProducto(Integer idProducto);
    List<Producto> findByEstado(EstadoProducto estadoProducto);


}
