import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account-type',
  templateUrl: './add-account-type.component.html',
  styleUrls: ['./add-account-type.component.scss'],
  providers: [AccountService]

})
export class AddAccountTypeComponent implements OnInit {

  constructor(public accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.accountService.selectedAccountType = {
      typeId: null,
      name: '',
      interstRate: null,
      sections: null
    };
  }

  onSubmit(form: NgForm) {
    this.accountService.postAccountType(form.value).subscribe((res: any) => {
      if (res.state == false) {
        alert(res.msg);
      } else {
        alert('Account Type Added');
        this.resetForm(form);
        this.router.navigateByUrl('/add-accounttype');
      }
    });
  }

}
