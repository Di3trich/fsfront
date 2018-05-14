import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonConfirmacionComponent } from './boton-confirmacion.component';

describe('BotonConfirmacionComponent', () => {
  let component: BotonConfirmacionComponent;
  let fixture: ComponentFixture<BotonConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
