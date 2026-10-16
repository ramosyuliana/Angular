import { Routes } from '@angular/router';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { FormProducto } from './components/agregar-producto/agregar-producto';
import { Login } from './components/login/login';
import { Carrito } from './components/carrito/carrito';
export const routes: Routes = [
    {path: '',redirectTo: 'productos',pathMatch:'full'},
    {path: 'productos',component: ListaProductos},
    {path: 'nuevo',component: FormProducto},
    {path: 'nuevo/:id',component:FormProducto},
    {path: 'login',component: Login},
    {path: 'carrito', component: Carrito}
];
