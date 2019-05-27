import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { UpdateAccountBalanceComponent } from './components/update-account-balance/update-account-balance.component';
import { CalculateIntrestComponent } from './components/calculate-intrest/calculate-intrest.component';
import { EditIntrestRatesComponent } from './components/edit-intrest-rates/edit-intrest-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAccountComponent,
    ViewAccountsComponent,
    UpdateAccountBalanceComponent,
    CalculateIntrestComponent,
    EditIntrestRatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
