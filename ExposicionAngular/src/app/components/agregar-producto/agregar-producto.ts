import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../services/producto';

@Component({
  selector: 'app-form-producto',
  imports: [FormsModule, RouterLink],
  templateUrl: './agregar-producto.html',
  styleUrl: './agregar-producto.css'
})
export class FormProducto implements OnInit {
  producto: Producto = { nombre: '', descripcion: '', precio: 0, cantidad: 0, imagen: '' };
  editando = false;

  constructor(
    private servicio: ProductoService,
    private router: Router,
    private ruta: ActivatedRoute,
    private cdr: ChangeDetectorRef          // 1. se inyecta
  ) {}

  ngOnInit() {
    const id = this.ruta.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);

    if (id) {
      this.editando = true;
      this.servicio.obtenerProducto(id).subscribe(p => {
        console.log('Producto recibido:', p);
        this.producto = p;
        this.cdr.detectChanges();           // 2. se avisa a Angular que redibuje
      });
    }
  }

  MtGuardar() {
    const peticion = this.editando
      ? this.servicio.actualizarProducto(this.producto)
      : this.servicio.crearProducto(this.producto);

    peticion.subscribe(() => this.router.navigate(['/productos']));
  }
}