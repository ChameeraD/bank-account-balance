import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIntrestRatesComponent } from './edit-intrest-rates.component';

describe('EditIntrestRatesComponent', () => {
  let component: EditIntrestRatesComponent;
  let fixture: ComponentFixture<EditIntrestRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIntrestRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIntrestRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
