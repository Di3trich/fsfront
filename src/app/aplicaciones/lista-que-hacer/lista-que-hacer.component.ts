import {Component, Input, OnInit} from '@angular/core';
import {Grupo, QueHacer} from '../../interfaces/api';
import {GrupoService} from '../../servicios/grupo.service';
import {QueHacerService} from '../../servicios/que-hacer.service';

@Component({
    selector: 'app-lista-que-hacer',
    templateUrl: './lista-que-hacer.component.html',
    styleUrls: ['./lista-que-hacer.component.css']
})
export class ListaQueHacerComponent implements OnInit {
    @Input() grupo: Grupo;
    nuevoQueHacer: QueHacer;

    constructor(private grupoService: GrupoService, private quehacerService: QueHacerService) {
    }

    ngOnInit() {
        this.nuevoQueHacer = {
            grupo: this.grupo.url,
            tarea: '',
            realizado: false
        };
    }

    agregarQueHacer() {
        this.quehacerService.setQueHacer(this.nuevoQueHacer).subscribe(quehacer => {
            this.nuevoQueHacer.tarea = '';
            this.actualizarGrupo();
        });
    }

    actualizarGrupo() {
        this.grupoService.getGrupo(this.grupo.url).subscribe(grupo => {
            this.grupo = grupo;
        });
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
