import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
//Importar las pantallas de cada contenido
import { Contenido } from './contenido/contenido';
import { Contenido2 } from './contenido2/contenido2';
import { Contenido3 } from './contenido3/contenido3';
import { Contenido4 } from './contenido4/contenido4';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTabsModule,
    Contenido,
    Contenido2,
    Contenido3,
    Contenido4,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primero');
}
