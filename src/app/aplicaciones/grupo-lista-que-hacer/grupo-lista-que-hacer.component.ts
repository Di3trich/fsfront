import {Component, OnInit} from '@angular/core';
import {Grupo, QueHacer} from '../../interfaces/api';
import {GrupoService} from '../../servicios/grupo.service';

@Component({
    selector: 'app-grupo-lista-que-hacer',
    templateUrl: './grupo-lista-que-hacer.component.html',
    styleUrls: ['./grupo-lista-que-hacer.component.css']
})
export class GrupoListaQueHacerComponent implements OnInit {
    listaGrupos: Grupo[];

    constructor(private grupoService: GrupoService) {
    }

    ngOnInit() {
        this.grupoService.getListaGrupos().subscribe(grupos => {
            this.listaGrupos = grupos;
        });
    }

}
