import { Component, computed, input, output, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Producto } from '../../model/producto';
import { AuthService } from '../../services/auth';
import { CarritoService } from '../../services/carrito-service';


@Component({
  selector: 'app-tarjeta-producto',
  imports: [CurrencyPipe],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css'
})
export class TarjetaProducto {

  public authService = inject(AuthService);
  public carritoService = inject(CarritoService);

  producto = input.required<Producto>();   
  editar = output<Producto>();             
  eliminar = output<Producto>();           

  imagenDefecto = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80';

  estado = computed(() => {
    const c = this.producto().cantidad;
    if (c === 0) return 'agotado';
    if (c <= 5) return 'poco';
    return 'ok';
  });
}