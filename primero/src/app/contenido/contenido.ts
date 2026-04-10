import { Component,inject } from '@angular/core';
import {MatDialogModule,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,


} from '@angular/material/dialog';
import { Contenido3 } from '../contenido3/contenido3';
import {MatButtonModule} from '@angular/material/button'
import { Contenido2 } from '../contenido2/contenido2';
import { Contenido4 } from '../contenido4/contenido4';

@Component({
  selector: 'app-contenido',
  imports: [MatButtonModule],
  templateUrl: './contenido.html',
  styleUrl: './contenido.css',
})
export class Contenido {
  readonly alerta=inject(MatDialog)
  mostrarAlerta():void{
    const alertaRef=this.alerta.open(Contenido2)
  }
}
