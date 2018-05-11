import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueHacerComponent } from './que-hacer.component';

describe('QueHacerComponent', () => {
  let component: QueHacerComponent;
  let fixture: ComponentFixture<QueHacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueHacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueHacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
