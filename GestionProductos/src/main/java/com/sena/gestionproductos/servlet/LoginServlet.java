/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sena.gestionproductos.servlet;

import com.sena.gestionproductos.dto.ApiError;
import com.sena.gestionproductos.dto.LoginRequest;
import com.sena.gestionproductos.model.Usuario;
import com.sena.gestionproductos.service.UsuarioService;
import com.sena.gestionproductos.util.JsonUtil;
import java.io.IOException;
import java.util.stream.Collectors;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author julil
 */
@WebServlet("/api/login")
public class LoginServlet extends BaseApiServlet {

    private final UsuarioService usuarioService = new UsuarioService();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        try {
            String jsonBody = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
            LoginRequest dto = JsonUtil.fromJson(jsonBody, LoginRequest.class);

            Usuario oUsuario = usuarioService.autenticar(dto.Emial, dto.Contraseña);
        } catch (NumberFormatException ex) {
            writeJson(resp, 400, new ApiError("BAD_REQUEST", "Las credenciales no son validas"));
        } catch (IllegalArgumentException ex) {
            writeJson(resp, 400, new ApiError("BAD_REQUEST", ex.getMessage()));
        } catch (Exception ex) {
            writeJson(resp, 500, new ApiError("INTERNAL_ERROR", "Error en el servidor: " + ex.getMessage()));
        }

    }
}
