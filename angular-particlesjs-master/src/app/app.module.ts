import { TransactionFilterPipe } from './components/account/transaction-filter.pipe';
import { AccountFilterPipe } from './components/view-accounts/account-filter.pipe';
import { SharedService } from './services/shared.service';
import { AppRoutingModule } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { UpdateAccountBalanceComponent } from './components/update-account-balance/update-account-balance.component';
import { CalculateIntrestComponent } from './components/calculate-intrest/calculate-intrest.component';
import { EditIntrestRatesComponent } from './components/edit-intrest-rates/edit-intrest-rates.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticlesComponent } from './particles/particles.component';
import { AccountComponent } from './components/account/account.component';
import { AddAccountTypeComponent } from './components/add-account-type/add-account-type.component';
import { MonthlyBalanceSheetComponent } from './components/monthly-balance-sheet/monthly-balance-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAccountComponent,
    ViewAccountsComponent,
    UpdateAccountBalanceComponent,
    CalculateIntrestComponent,
    EditIntrestRatesComponent,
    NavBarComponent,
    ParticlesComponent,
    AccountComponent,
    AccountFilterPipe,
    TransactionFilterPipe,
    AddAccountTypeComponent,
    MonthlyBalanceSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
