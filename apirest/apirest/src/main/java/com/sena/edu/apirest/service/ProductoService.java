package com.sena.edu.apirest.service;

import java.util.List;
import java.util.Optional;

import com.sena.edu.apirest.entity.Producto;

public interface ProductoService {

    Producto registrarProducto(Producto producto);

    List<Producto> listarProductos();

    Optional<Producto> obtenerPorId(Integer id);

    Optional<Producto> actualizarProducto(Integer id, Producto datos);

    boolean eliminarProducto(Integer id);
}