import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentekComponent } from './componentek.component';

describe('ComponentekComponent', () => {
  let component: ComponentekComponent;
  let fixture: ComponentFixture<ComponentekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
