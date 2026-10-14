package com.sena.edu.apirest.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.edu.apirest.entity.EstadoProducto;
import com.sena.edu.apirest.entity.Producto;
import com.sena.edu.apirest.service.ProductoService;

import lombok.SneakyThrows;

import com.sena.edu.apirest.repository.*;

@Service 
public class ProductoServiceImpl implements ProductoService {

    @Autowired 
    private ProductoRepository productoRepository;

    @Override
    @SneakyThrows 
    public Producto actualizarProducto (Integer idProducto,Producto producto) {
        Producto productoExistente = productoRepository.findById(idProducto)
        .orElseThrow(() -> new Exception("Producto con ID"+idProducto+"No encontrado"));
        
        productoExistente.setNombreProducto(producto.getNombreProducto());
        productoExistente.setDescripcion(producto.getDescripcion());
        productoExistente.setCantidad(producto.getCantidad());
        productoExistente.setPrecio(producto.getPrecio());
        productoExistente.setImagen(producto.getImagen());
        productoExistente.setEstadoProducto(producto.getEstadoProducto());

        Producto productoActualizado = productoRepository.save(productoExistente);

        return productoActualizado;
    
    }

    @Override
    public Optional<Producto> buscarPorId(Integer idProducto) {
        return productoRepository.findById(idProducto);
    }

    

    @Override
    @SneakyThrows 
    public Producto cambiarEstadoProducto(Integer idProducto, EstadoProducto nuevoEstadoProducto) {
        Producto productoExistente = productoRepository.findById(idProducto)
        .orElseThrow(() -> new Exception("Producto con ID"+idProducto+"No encontrado"));
        productoExistente.setEstadoProducto(nuevoEstadoProducto);
        return productoRepository.save(productoExistente);
    }

    @Override
    @SneakyThrows 
    public void eliminarProducto(Integer idProducto) {
        productoRepository.findById(idProducto)
        .orElseThrow(() -> new Exception("Producto con ID"+idProducto+"No encontrado"));
        productoRepository.deleteById(idProducto);
        
    }

    @Override
    public List<Producto> listarProductos() {
        List<Producto> productos = productoRepository.findAll();
        return productos.stream()
        .toList();
    }

    

    @Override
    public Producto registrarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    
}
