import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenildaComponent } from './benilda.component';

describe('BenildaComponent', () => {
  let component: BenildaComponent;
  let fixture: ComponentFixture<BenildaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenildaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenildaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
