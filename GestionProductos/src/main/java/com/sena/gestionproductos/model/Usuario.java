/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sena.gestionproductos.model;

/**
 *
 * @author julil
 */
public class Usuario {

    public int Id;

    public String Nombre;

    public String Rol;

    public String Email;

    public String Contrasena;

    public Usuario() {
    }

    public Usuario(int Id, String Nombre, String Rol, String Email, String Contrasena) {
        this.Id = Id;
        this.Nombre = Nombre;
        this.Rol = Rol;
        this.Email = Email;
        this.Contrasena = Contrasena;
    }

    public int getId() {
        return Id;
    }

    public void setId(int Id) {
        this.Id = Id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getRol() {
        return Rol;
    }

    public void setRol(String Rol) {
        this.Rol = Rol;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getContrasena() {
        return Contrasena;
    }

    public void setContrasena(String Contrasena) {
        this.Contrasena = Contrasena;
    }

}
