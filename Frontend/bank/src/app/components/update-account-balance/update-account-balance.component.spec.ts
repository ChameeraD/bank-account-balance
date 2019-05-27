import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountBalanceComponent } from './update-account-balance.component';

describe('UpdateAccountBalanceComponent', () => {
  let component: UpdateAccountBalanceComponent;
  let fixture: ComponentFixture<UpdateAccountBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccountBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
