import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Contacto } from './contacto/contacto';
import { Nosotros } from './nosotros/nosotros';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Inicio,
    Servicios,
    Contacto,
    Nosotros,
    MatTabsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examen');
}
