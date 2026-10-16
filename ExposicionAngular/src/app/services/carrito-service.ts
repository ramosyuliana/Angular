import { Injectable, signal, effect, computed } from '@angular/core';
import { ItemCarrito, Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly STORAGE_KEY = 'carrito_compras';

  readonly carrito = signal<ItemCarrito[]>(this.obtenerDeStorage());

  readonly totalItems = computed(() => 
    this.carrito().reduce((total, item) => total + item.cantidadSeleccionada, 0)
  );

  readonly subtotal = computed(() =>
    this.carrito().reduce((acc, item) => acc + (item.producto.precio * item.cantidadSeleccionada), 0)
  );

  constructor() {
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.carrito()));
    });
  }

  agregarProducto(producto: Producto, cantidadAgregar = 1) {
    const items = [...this.carrito()];
    const index = items.findIndex(item => item.producto.id === producto.id);

    if (index !== -1) {
      items[index] = {
        ...items[index],
        cantidadSeleccionada: items[index].cantidadSeleccionada + cantidadAgregar
      };
    } else {
      items.push({ producto, cantidadSeleccionada: cantidadAgregar });
    }

    this.carrito.set(items);
  }

  actualizarCantidad(productoId: number | string | undefined, cambio: number) {
    const items = this.carrito().map(item => {
      if (item.producto.id === productoId) {
        const nuevaCantidad = item.cantidadSeleccionada + cambio;
        return nuevaCantidad > 0 ? { ...item, cantidadSeleccionada: nuevaCantidad } : item;
      }
      return item;
    });

    this.carrito.set(items);
  }

  eliminarProducto(productoId: number | string | undefined) {
    this.carrito.set(this.carrito().filter(item => item.producto.id !== productoId));
  }

  limpiarCarrito() {
    this.carrito.set([]);
  }

  private obtenerDeStorage(): ItemCarrito[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
}