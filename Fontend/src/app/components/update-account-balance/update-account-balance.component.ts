import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-account-balance',
  templateUrl: './update-account-balance.component.html',
  styleUrls: ['./update-account-balance.component.css'],
  providers: [TransactionService]

})
export class UpdateAccountBalanceComponent implements OnInit {

  constructor(public transactionService: TransactionService,
    private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.transactionService.selectedTransaction1 = {
      transactionId: null,
      accountNumber: null,
      amount: null,
      date: null,
      type: 'in',
      balance: null
    };
    this.transactionService.selectedTransaction2 = {
      transactionId: null,
      accountNumber: null,
      amount: null,
      date: null,
      type: 'out',
      balance: null
    };
  }

  onSubmit1(form: NgForm) {
    console.log(form.value);
    this.transactionService.postTransaction(form.value).subscribe((res: any) => {
      if (res.state == false) {
        console.log(res);
        alert(res.msg);
      } else {
        alert('Transaction Sucessfull');
        this.resetForm(form);
        this.router.navigateByUrl('/update-account');
      }
    });
  }
}

