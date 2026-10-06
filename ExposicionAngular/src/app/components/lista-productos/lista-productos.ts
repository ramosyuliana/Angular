import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../services/producto';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';

@Component({
  selector: 'app-lista-productos',
  imports: [FormsModule, RouterLink, TarjetaProducto],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos implements OnInit {
  productos = signal<Producto[]>([]);
  busqueda = signal('');
  porEliminar = signal<Producto | null>(null);

  // Se recalcula sola cuando cambian productos o busqueda
  filtrados = computed(() => {
    const q = this.busqueda().toLowerCase().trim();
    return this.productos().filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      (p.descripcion ?? '').toLowerCase().includes(q)
    );
  });

  constructor(private servicio: ProductoService, private router: Router) {}

  ngOnInit() { this.cargar(); }

  cargar() {
    this.servicio.getProductos().subscribe(datos => this.productos.set(datos));
  }

  editar(p: Producto) {
    this.router.navigate(['/nuevo', p.id]);
  }

  pedirConfirmacion(p: Producto) {
    this.porEliminar.set(p);
  }

  cancelar() {
    this.porEliminar.set(null);
  }

  confirmarEliminar() {
    const p = this.porEliminar();
    if (!p?.id) return;
    this.servicio.eliminarProducto(p.id).subscribe(() => {
      this.porEliminar.set(null);
      this.cargar();
    });
  }
}