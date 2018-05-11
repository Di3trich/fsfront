import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoEditableComponent } from './campo-editable.component';

describe('CampoEditableComponent', () => {
  let component: CampoEditableComponent;
  let fixture: ComponentFixture<CampoEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
