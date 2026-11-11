import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dosxd',
  styleUrl: './dosxd.css',
  templateUrl: './dosxd.html',
})
export class Dosxd {
  productos = [
    { nombre: 'Audífonos', categoria: 'Tecnología', precio: 85000 },
    { nombre: 'Teclado mecánico', categoria: 'Tecnología', precio: 150000 },
    { nombre: 'Camiseta', categoria: 'Ropa', precio: 60000 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 220000 },
    { nombre: 'Libro Angular', categoria: 'Libros', precio: 95000 },
  ];
}
