import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from './components/navbar/navbar';
import { Dosxd } from './components/dosxd/dosxd';
import { Tresxd } from './components/tresxd/tresxd';
import { Kuatroxd } from './components/kuatroxd/kuatroxd';
import { Sinkopeso } from './components/sinkopeso/sinkopeso';
@Component({
  selector: 'app-root',
  imports: [FormsModule, Navbar, Dosxd, Tresxd, Kuatroxd, Sinkopeso],
  templateUrl: './app.html',
  styleUrl: './app.css', 
})
export class App {

}