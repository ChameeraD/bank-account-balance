import { Transaction } from './../../services/transaction.model';
import { AccountService } from './../../services/account.service';
import { TransactionService } from './../../services/transaction.service';
import { SharedService } from './../../services/shared.service';
import { Account } from './../../services/account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [Account, TransactionService, AccountService]
})
export class AccountComponent implements OnInit {
searchKeyword: string;
public accNumber: number;
public acc: Account;
  constructor(
    public sharedService: SharedService,
    public account: Account,
    public transactionService: TransactionService,
    public accountService: AccountService,
  ) { }

  ngOnInit() {
    this.accNumber = this.sharedService.getOption();
    this.getAccountDetails(this.accNumber);
    this.getTransactionDetails(this.accNumber);
  }

  getAccountDetails(accNumber: number) {
    this.accountService.getAccountById(accNumber).subscribe((res: any) => {
      this.accountService.account = res;
      console.log(this.accountService.account[0]);
    });
  }
  getTransactionDetails(accNumber: number) {
    this.transactionService.getTransactionByAccountId(accNumber).subscribe((res) => {
      this.transactionService.transaction = res as Transaction[];
      console.log(this.transactionService.transaction);
    });
  }
}
