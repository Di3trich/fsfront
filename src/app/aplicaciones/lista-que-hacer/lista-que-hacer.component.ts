import {Component, OnInit} from '@angular/core';
import {QueHacer} from './modelos/que-hacer';

@Component({
    selector: 'app-lista-que-hacer',
    templateUrl: './lista-que-hacer.component.html',
    styleUrls: ['./lista-que-hacer.component.css']
})
export class ListaQueHacerComponent implements OnInit {
    queHaceres: QueHacer[];
    titulo: string;

    constructor() {
        this.queHaceres = [];
        this.titulo = '';
    }

    ngOnInit() {
    }

    agregarQueHacer() {
        if (this.titulo !== '') {
            this.queHaceres.push(new QueHacer(this.titulo, false));
            this.titulo = '';
        }
    }

}
