import { Transaction } from './../../services/transaction.model';
import { AccountService } from './../../services/account.service';
import { TransactionService } from './../../services/transaction.service';
import { SharedService } from './../../services/shared.service';
import { Account } from './../../services/account.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-monthly-balance-sheet',
  templateUrl: './monthly-balance-sheet.component.html',
  styleUrls: ['./monthly-balance-sheet.component.scss'],
  providers: [Account, TransactionService, AccountService]

})
export class MonthlyBalanceSheetComponent implements OnInit {
  typeId: any;
  constructor(
    public sharedService: SharedService,
    public account: Account,
    public transactionService: TransactionService,
    public accountService: AccountService,
  ) { }

  today = new Date();

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.typeId);
      this.accountService.getAccountListByTypeId(form.value.typeId).subscribe((res) => {
        console.log(res);
        this.accountService.account = res as Account[];
      });
  }
}
