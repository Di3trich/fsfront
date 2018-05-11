import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoListaQueHacerComponent } from './grupo-lista-que-hacer.component';

describe('GrupoListaQueHacerComponent', () => {
  let component: GrupoListaQueHacerComponent;
  let fixture: ComponentFixture<GrupoListaQueHacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoListaQueHacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoListaQueHacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
