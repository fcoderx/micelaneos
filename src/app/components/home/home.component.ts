import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>

  <p>Hola Mundo desde app.component</p>

  <app-clases></app-clases>
  <br><br>

  <h2 [appResaltado]="'orange'">Prueba de directivas</h2>

  <br><br>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
