import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

    constructor(private _route: ActivatedRoute) {
        this._route.parent.params.subscribe(params => {
            console.log('Ruta hija');
            console.log(params['id']);
        });
    }

    ngOnInit() {
    }

}
