import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AirtableServices {
  private urlAirtable="";
  private token="";

  //CONSTRUCTOR DE LOS SERVICIOS
  constructor(private http:HttpClient){

  }
  obtenerDatos(){
    const headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(this.urlAirtable,{headers});
  }
}
