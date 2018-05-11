import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-campo-editable',
    templateUrl: './campo-editable.component.html',
    styleUrls: ['./campo-editable.component.css']
})
export class CampoEditableComponent implements OnInit {
    @Input() original: string;
    @Output() actualizado = new EventEmitter<string>();
    temporal: string;
    editar = false;

    constructor() {
    }

    ngOnInit() {
        this.temporal = this.original;
    }

    cambiar() {
        this.original = this.temporal;
        this.editar = false;
        this.actualizado.emit(this.original);
    }

    cancelar() {
        this.editar = false;
    }
}
