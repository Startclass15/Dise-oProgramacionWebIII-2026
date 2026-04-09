import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
//Importar las pantallas de cada contenido
import { Contenido } from './contenido/contenido';
import { Contenido2 } from './contenido2/contenido2';
import { Contenido3 } from './contenido3/contenido3';
import { Contenido4 } from './contenido4/contenido4';


//Importacion del modulo 
import {MatToolbarModule} from '@angular/material/toolbar';

//Importar el modulo Bottom Sheet
import {MatBottomSheetModule,
  MatBottomSheet, MatBottomSheetRef

} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTabsModule,
    Contenido,
    Contenido2,
    Contenido3,
    Contenido4,
    MatIconModule,
    MatToolbarModule,
    MatBottomSheetModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primero');
  private _bottomSheet=inject(MatBottomSheet);
  mostrarBarra(): void{
    this._bottomSheet.open(Contenido3)
  }
}
