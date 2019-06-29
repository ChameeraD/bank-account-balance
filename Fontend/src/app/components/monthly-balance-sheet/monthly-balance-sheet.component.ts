import { Transaction } from './../../services/transaction.model';
import { AccountService } from './../../services/account.service';
import { TransactionService } from './../../services/transaction.service';
import { SharedService } from './../../services/shared.service';
import { Account } from './../../services/account.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-monthly-balance-sheet',
  templateUrl: './monthly-balance-sheet.component.html',
  styleUrls: ['./monthly-balance-sheet.component.scss'],
  providers: [Account, TransactionService, AccountService]

})
export class MonthlyBalanceSheetComponent implements OnInit {
  typeId: any;
  totalBalance: any;
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
      this.accountService.getAccountListByTypeId(form.value.typeId).subscribe((res) => {
        this.accountService.account = res as Account[];
      });
      this.accountService.getTotalBalanceByTypeId(form.value.typeId).subscribe((res) => {
        this.totalBalance = res[0].totalBalance;
        console.log(this.totalBalance);
      });
  }
  
}
