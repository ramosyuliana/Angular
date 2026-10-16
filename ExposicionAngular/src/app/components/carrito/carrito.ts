import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito-service';

@Component({
  imports: [CommonModule, CurrencyPipe,RouterLink],
  selector: 'app-carrito',
  styleUrl: './carrito.css',
  templateUrl: './carrito.html',
})
export class Carrito {

public readonly carritoService = inject(CarritoService);
  private readonly router = inject(Router);

  readonly costoEnvio = 12000; 

  obtenerTotal(): number {
    return this.carritoService.subtotal() + (this.carritoService.carrito().length > 0 ? this.costoEnvio : 0);
  }

  procesarPago() {
    alert('¡Compra realizada con éxito! Gracias por confiar en VetCare.');
    this.carritoService.limpiarCarrito();
    this.router.navigate(['/cliente']);
  }

}
