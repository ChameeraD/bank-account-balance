import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService} from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  providers: [AccountService]
})
export class AddAccountComponent implements OnInit {
  constructor(public accountService: AccountService,
    private router: Router, ) {}


  ngOnInit() {
  this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.accountService.selectedAccount = {
      accountNumber: null,
      typeId: null,
      balance: null,
      region: '',
    };
  }

  onSubmit(form: NgForm) {
    // if (form.value.accountNumber ==null) {
      console.log(form.value);
            this.accountService.postAccount(form.value).subscribe((res: any) => {
              if (res.state == false) {
                console.log(res);
                alert(res.msg);
              } else {
                console.log(res);
                alert('Account Added');
                this.resetForm(form);
                this.router.navigateByUrl('/add-account');
              }
            });
       // }
        // else {
        //     this.travelAgentService.putTravelAgent(form.value).subscribe((res:any) => {
        //       alert('Travel Agent Updated');
        //         this.resetForm(form);
        //         this.router.navigateByUrl('/travelagent-account');
        //     });
        // }
  }

}
