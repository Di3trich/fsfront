import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QueHacerService} from '../../servicios/que-hacer.service';
import {QueHacer} from '../../interfaces/api';

@Component({
    selector: 'app-que-hacer',
    templateUrl: './que-hacer.component.html',
    styleUrls: ['./que-hacer.component.css']
})
export class QueHacerComponent implements OnInit {
    @Input() quehacer: QueHacer;
    @Output() onEliminar = new EventEmitter<void>();

    constructor(private quehacerService: QueHacerService) {
    }

    ngOnInit() {
    }

    eliminarQueHacer() {
        this.quehacerService.eliminarQueHacer(this.quehacer.url).subscribe(() => {
            this.onEliminar.emit();
        });
    }

}
