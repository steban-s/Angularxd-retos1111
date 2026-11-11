import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  numerouno: number | null = null;
  numerodos: number | null = null;
  resultado: number | null = null;
  mensajeError = '';

  sumar() {
    if (this.numerouno == null || this.numerodos == null) {
      this.mensajeError = 'Faltan datos, escribe los dos números';
      this.resultado = null;
    } else {
      this.mensajeError = '';
      this.resultado = this.numerouno + this.numerodos;
    }
  }

  restar() {
    if (this.numerouno == null || this.numerodos == null) {
      this.mensajeError = 'Faltan datos, escribe los dos números';
      this.resultado = null;
    } else {
      this.mensajeError = '';
      this.resultado = this.numerouno - this.numerodos;
    }
  }
}
