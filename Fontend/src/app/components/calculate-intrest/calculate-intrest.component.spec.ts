import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateIntrestComponent } from './calculate-intrest.component';

describe('CalculateIntrestComponent', () => {
  let component: CalculateIntrestComponent;
  let fixture: ComponentFixture<CalculateIntrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateIntrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateIntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
