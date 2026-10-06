import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({ providedIn: 'root' })
export class ProductoService {

  private apiUrl = 'https://6ac4014cae53bf25b80f30f9.mockapi.io/api/v1/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  crearProducto(p: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, p);
  }
  actualizarProducto(p: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${p.id}`, p);
  }
  eliminarProducto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  obtenerProducto(id: string):Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);

  }
}