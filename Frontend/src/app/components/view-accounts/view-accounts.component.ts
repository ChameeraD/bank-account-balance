import { SharedService } from './../../services/shared.service';
import { Account } from './../../services/account.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css'],
  providers: [AccountService, Account]
})


export class ViewAccountsComponent implements OnInit {
  searchKeyword:string;

  constructor(public accountService: AccountService,
    private router: Router,
    public sharedService: SharedService ) { }

  ngOnInit() {
    this.refreshAccountList();
  }

  refreshAccountList() {
    this.accountService.getAccountList().subscribe((res) => {
      this.accountService.account = res as Account[];
      console.log(res);
    });
  }

  goToProfile(account: Account) {
    this.sharedService.setOption(account.accountNumber);
    this.router.navigateByUrl('account');
  }

}
