import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBalanceSheetComponent } from './monthly-balance-sheet.component';

describe('MonthlyBalanceSheetComponent', () => {
  let component: MonthlyBalanceSheetComponent;
  let fixture: ComponentFixture<MonthlyBalanceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyBalanceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
