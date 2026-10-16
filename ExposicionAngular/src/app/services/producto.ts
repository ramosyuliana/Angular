import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({ providedIn: 'root' })
export class ProductoService {

  private apiUrl = 'http://localhost:8082/api/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  crearProducto(p: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/registrar`, p);
  }
  actualizarProducto(p: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${p.id}`, p);
  }
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  obtenerProducto(id: number):Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
}