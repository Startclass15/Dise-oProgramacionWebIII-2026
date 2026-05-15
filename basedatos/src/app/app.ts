import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AirtableServices } from './airtable-services';
//App services


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basedatos');

  datos:any;
  constructor(private airtableService:AirtableServices)
  {}
  ngOnInit(){
    this.airtableService.obtenerDatos().subscribe(res=>{
      console.log(res);
      this.datos=res;
    });
  }
}
