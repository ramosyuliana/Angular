import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginRequest{
    Email: string;
    Contrasena: string;
}

export interface Usuario {
    Id: number;
    Nombre: string;
    Rol: string;
    Email: string;

}

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private apiUrl = 'http://localhost:8080/GestionProductos/api/login';

    constructor(private http: HttpClient, private router: Router){}

    login(credenciales: LoginRequest): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, credenciales).pipe(
      tap((usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
      })
    );
  }

  get usuarioActual(): Usuario | null {
    const data = localStorage.getItem('usuario');
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return this.usuarioActual !== null;
  }

  isAdmin(): boolean {
    return this.usuarioActual?.Rol?.toUpperCase() === 'ADMINISTRADOR';
  }

  isCliente(): boolean {
    return this.usuarioActual?.Rol?.toUpperCase() === 'CLIENTE';
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

}
