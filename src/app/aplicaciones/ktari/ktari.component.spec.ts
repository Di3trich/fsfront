import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtariComponent } from './ktari.component';

describe('KtariComponent', () => {
  let component: KtariComponent;
  let fixture: ComponentFixture<KtariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
