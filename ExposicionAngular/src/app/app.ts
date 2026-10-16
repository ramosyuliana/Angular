import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive,  NavigationEnd, Router, } from '@angular/router';
import { AuthService } from './services/auth';
import { CarritoService } from './services/carrito-service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  imports: [RouterOutlet,RouterLink,RouterLinkActive, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {

  public authService = inject(AuthService);
  public carritoService = inject(CarritoService);

private router = inject(Router);

  // Rutas donde NO se muestra el header
  private rutasSinHeader = ['/login'];

  private urlActual = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    // Evita que el header parpadee al cargar directamente en /login
    { initialValue: window.location.pathname },
  );

  mostrarHeader = computed(
    () => !this.rutasSinHeader.some((ruta) => this.urlActual().startsWith(ruta)),
  );

}
