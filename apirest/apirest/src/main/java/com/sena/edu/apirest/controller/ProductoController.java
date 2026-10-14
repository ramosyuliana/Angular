package com.sena.edu.apirest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sena.edu.apirest.entity.*;

import com.sena.edu.apirest.service.ProductoService;

@RestController 
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping ("/api/productos")
public class ProductoController {

    @Autowired 
    private ProductoService productoService;

    @PostMapping("/registrar")
    public ResponseEntity<?> registrarProducto(@RequestBody Producto producto){
        Producto nuevoProducto = productoService.registrarProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoProducto);
    }

    @GetMapping 
    public ResponseEntity<List<Producto>> listarProductos(){
        List<Producto> productos = productoService.listarProductos();
        return ResponseEntity.ok(productos);
    }

}
