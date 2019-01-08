import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

    constructor(private _route: ActivatedRoute) {
        this._route.params.subscribe(params => {
            console.log('Ruta padre');
            console.log(params['id']);
        });
    }

    ngOnInit() {
    }

}
