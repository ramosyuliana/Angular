package com.sena.edu.apirest.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.edu.apirest.entity.*;
import com.sena.edu.apirest.repository.ProductoRepository;
import com.sena.edu.apirest.service.ProductoService;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public Producto registrarProducto(Producto producto) {
        producto.setIdProducto(null);                                   // fuerza un registro nuevo

        if (producto.getCantidad() == null) {
            producto.setCantidad(0);
        }
        if (producto.getPrecio() == null) {
            producto.setPrecio(0.0);
        }
        if (producto.getEstadoProducto() == null) {
            producto.setEstadoProducto(EstadoProducto.DISPONIBLE);       // cámbienlo por un valor de su enum
        }
        return productoRepository.save(producto);
    }

    @Override
    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }

    @Override
    public Optional<Producto> obtenerPorId(Integer id) {
        return productoRepository.findById(id);
    }

    @Override
    public Optional<Producto> actualizarProducto(Integer id, Producto datos) {
        return productoRepository.findById(id).map(existente -> {
            existente.setNombreProducto(datos.getNombreProducto());
            existente.setDescripcion(datos.getDescripcion());
            existente.setCantidad(datos.getCantidad());
            existente.setPrecio(datos.getPrecio());
            existente.setImagen(datos.getImagen());
            if (datos.getEstadoProducto() != null) {
                existente.setEstadoProducto(datos.getEstadoProducto());
            }
            return productoRepository.save(existente);
        });
    }

    @Override
    public boolean eliminarProducto(Integer id) {
        if (!productoRepository.existsById(id)) {
            return false;
        }
        productoRepository.deleteById(id);
        return true;
    }
}
