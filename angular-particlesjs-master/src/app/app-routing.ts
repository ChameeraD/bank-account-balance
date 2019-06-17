
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAccountComponent} from './components/add-account/add-account.component';
import { CalculateIntrestComponent } from './components/calculate-intrest/calculate-intrest.component';
import { ViewAccountsComponent } from "./components/view-accounts/view-accounts.component";
import { HomeComponent } from "./components/home/home.component";
import { UpdateAccountBalanceComponent } from "./components/update-account-balance/update-account-balance.component";
import { EditIntrestRatesComponent } from "./components/edit-intrest-rates/edit-intrest-rates.component";

const applicationRoutes: Routes = [
  { path: "add-account", component: AddAccountComponent },
  { path: "calculate-intrest", component: CalculateIntrestComponent },
  { path: "view-accounts", component: ViewAccountsComponent },
  { path: 'home', component: HomeComponent },
  { path: '' , redirectTo:'home' , pathMatch: 'full'},
  { path: 'update-account', component: UpdateAccountBalanceComponent },
  { path: 'edit-rates', component: EditIntrestRatesComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(applicationRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule { }
