import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from './components/ejer_1_calculadora/navbar';
import { Dosxd } from './components/ejer_2_catalogo/dosxd';
import { Tresxd } from './components/ejer_3_estudiantes/tresxd';
import { Kuatroxd } from './components/ejer_4_semaforo/kuatroxd';
import { Sinkopeso } from './components/ejer_5_control_inventario/sinkopeso';
@Component({
  selector: 'app-root',
  imports: [FormsModule, Navbar, Dosxd, Tresxd, Kuatroxd, Sinkopeso],
  templateUrl: './app.html',
  styleUrl: './app.css', 
})
export class App {

}