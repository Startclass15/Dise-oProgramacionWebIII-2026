import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pantalla1 } from './pantalla1/pantalla1';
import { Pantalla2 } from './pantalla2/pantalla2';
import { Pantalla3 } from './pantalla3/pantalla3';
import { Pantalla4 } from './pantalla4/pantalla4';


@Component({
  selector: 'app-root',
  imports: [
    Pantalla1,
    Pantalla2,
    Pantalla3,
    Pantalla4
    ,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentesAvanzados');
}
