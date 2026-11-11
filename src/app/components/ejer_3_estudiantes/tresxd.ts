import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tresxd',
  imports: [FormsModule],
  templateUrl: './tresxd.html',
  styleUrl: './tresxd.css'
})
export class Tresxd {
  nombreEstudiante = '';
  programaEstudiante = '';
  edadEstudiante: number | null = null;
  mensajeEstudiante = '';
  estudiantes: { nombre: string, programa: string, edad: number }[] = [];

  registrar() {
    if (!this.nombreEstudiante.trim() || !this.programaEstudiante.trim() || !this.edadEstudiante || this.edadEstudiante <= 0) {
      this.mensajeEstudiante = 'Oye, completa todos los datos y pon una edad válida';
      return;
    }
    this.estudiantes.push({
      nombre: this.nombreEstudiante,
      programa: this.programaEstudiante,
      edad: this.edadEstudiante!
    });
    this.mensajeEstudiante = 'Estudiante registrado!';
    this.nombreEstudiante = '';
    this.programaEstudiante = '';
    this.edadEstudiante = null;
  }
}