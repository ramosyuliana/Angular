package com.sena.edu.apirest.service;

import java.util.List;
import java.util.Optional;

import  com.sena.edu.apirest.entity.*;


public interface ProductoService {

    Producto registrarProducto(Producto producto);

    List<Producto> listarProductos();

    Optional<Producto> buscarPorId(Integer idProducto);

    Producto actualizarProducto(Integer idProducto,Producto producto);

    void eliminarProducto(Integer idProducto);

    Producto cambiarEstadoProducto(Integer idProducto,EstadoProducto nuevoEstadoProducto);

    
}
