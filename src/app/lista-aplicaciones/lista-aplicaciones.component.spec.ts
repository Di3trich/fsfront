import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListaAplicacionesComponent} from './lista-aplicaciones.component';

describe('ListaAplicacionesComponent', () => {
    let component:ListaAplicacionesComponent;
    let fixture:ComponentFixture<ListaAplicacionesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaAplicacionesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListaAplicacionesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
