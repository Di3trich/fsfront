import {Component, Input, OnInit} from '@angular/core';
import {QueHacer} from './modelos/que-hacer';
import {Grupo} from '../../interfaces/api';
import {GrupoService} from '../../servicios/grupo.service';

@Component({
    selector: 'app-lista-que-hacer',
    templateUrl: './lista-que-hacer.component.html',
    styleUrls: ['./lista-que-hacer.component.css']
})
export class ListaQueHacerComponent implements OnInit {
    @Input() grupo: Grupo;

    constructor(private grupoService: GrupoService) {
    }

    ngOnInit() {
    }

    agregarQueHacer() {
    }

    contarHechas(): number {
        let total = 0;
        this.grupo.quehacer_set.forEach(elemento => {
            if (elemento.realizado) {
                total++;
            }
        });
        return total;
    }
}
