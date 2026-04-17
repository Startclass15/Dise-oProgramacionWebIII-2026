import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-pantalla1',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pantalla1.html',
  styleUrl: './pantalla1.css',
})
export class Pantalla1 {}
