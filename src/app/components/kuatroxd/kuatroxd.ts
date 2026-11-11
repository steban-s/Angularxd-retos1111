import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-kuatroxd',
  styleUrl: './kuatroxd.css',
  templateUrl: './kuatroxd.html',
})
export class Kuatroxd {
    colorSemaforo = 'gris';

  cambiarColor(color: string) {
    this.colorSemaforo = color;
  }
}
