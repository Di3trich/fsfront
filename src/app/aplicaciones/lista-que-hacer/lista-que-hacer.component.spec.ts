import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListaQueHacerComponent} from './lista-que-hacer.component';

describe('ListaQueHacerComponent', () => {
    let component:ListaQueHacerComponent;
    let fixture:ComponentFixture<ListaQueHacerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaQueHacerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListaQueHacerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
