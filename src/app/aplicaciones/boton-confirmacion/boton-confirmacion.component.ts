import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-boton-confirmacion',
    templateUrl: './boton-confirmacion.component.html',
    styleUrls: ['./boton-confirmacion.component.css']
})
export class BotonConfirmacionComponent implements OnInit {
    @Output() accion = new EventEmitter<void>();
    confirmar = false;

    constructor() {
    }

    ngOnInit() {
    }

    eventoConfirmar() {
        this.accion.emit();
    }
}
