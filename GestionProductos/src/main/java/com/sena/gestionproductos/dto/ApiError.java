/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sena.gestionproductos.dto;

/**
 *
 * @author julil
 */
public class ApiError {

    public String error;
    public String mensaje;

    public ApiError(String error, String mensaje) {
        this.error = error;
        this.mensaje = mensaje;
    }

}
