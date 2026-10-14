package com.sena.edu.apirest.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity 
@Data 
@AllArgsConstructor 
@NoArgsConstructor 

public class Producto {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProducto;

    @Column(name="NombreProducto",nullable = false,length =200)
    private String nombreProducto;
    @Column(name="Descripcion")
    private String descripcion;
    @Column(name="Cantidad",nullable = false)
    private int cantidad;
    @Column(name="Precio",nullable = false)
    private double precio;
    @Column(name="Imagen",nullable = false)
    private String imagen;
    @Enumerated(EnumType.STRING)
    @Column(name="Estado",nullable = false)
    private EstadoProducto estadoProducto;
    
}
