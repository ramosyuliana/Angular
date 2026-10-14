/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sena.gestionproductos.service;

import com.sena.gestionproductos.model.Usuario;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author julil
 */
public class UsuarioService {

    private static final List<Usuario> usuarios = new ArrayList();

    static {
        usuarios.add(new Usuario(1, "Camilo Morantes", "Administrador", "camiloadmin@gmail.com", "admin123"));

        usuarios.add(new Usuario(2, "Yuliana Ramos", "Cliente", "yulianacliente@gmail.com", "cliente123"));

    }
    
    
    
   public Usuario autenticar(String email, String password) {
        if (email == null || password == null) {
            return null;
        }

        return usuarios.stream()
                .filter(u -> u.getEmail().equalsIgnoreCase(email.trim()) 
                          && u.getContrasena().equals(password))
                .findFirst()
                .orElse(null);
    }

}
