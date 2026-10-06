import { Routes } from '@angular/router';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { FormProducto } from './components/agregar-producto/agregar-producto';
export const routes: Routes = [
    {path: '',redirectTo: 'productos',pathMatch:'full'},
    {path: 'productos',component: ListaProductos},
    {path: 'nuevo',component: FormProducto},
    {path: 'nuevo/:id',component:FormProducto}
];
