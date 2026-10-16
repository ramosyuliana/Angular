export interface Producto{
    id?: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    precio:number;
    imagen:string;
}

export interface ItemCarrito{
    producto: Producto,
    cantidadSeleccionada: number
}