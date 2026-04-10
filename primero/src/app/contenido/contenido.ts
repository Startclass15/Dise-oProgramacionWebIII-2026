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
//Importar SnackBar
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contenido',
  imports: [MatButtonModule],
  templateUrl: './contenido.html',
  styleUrl: './contenido.css',
})
export class Contenido {
  readonly alerta=inject(MatDialog)
  private notificacionInferior=inject(MatSnackBar)
  mostrarAlerta():void{
    const alertaRef=this.alerta.open(Contenido2)
  }
  //funcion para mostrar la notificacion
  
  mostrarNotificacion(){
    this.notificacionInferior.open("Confirmacion de Pedido","Ok");
  }
}
