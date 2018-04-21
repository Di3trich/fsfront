import {Component, OnInit} from '@angular/core';
import {QueHacer} from './modelos/que-hacer';
import {forEach} from '@angular/router/src/utils/collection';

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

    quitarQueHacer(elemento: QueHacer) {
        const indice = this.queHaceres.indexOf(elemento);
        if (indice !== -1) {
            this.queHaceres.splice(indice, 1);
        }
    }

    contarHechas(): number {
        let total = 0;
        this.queHaceres.forEach(elemento => {
            if (elemento.completado) {
                total++;
            }
        });
        return total;
    }

}
