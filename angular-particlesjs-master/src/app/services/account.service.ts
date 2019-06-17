import { Account } from './account.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class AccountService {
  selectedAccount: Account;
  account: Account[];
  type: string;

  readonly baseURL = "http://localhost:4201/account/";

  constructor(private http: HttpClient) {}

  postAccount(account: Account) {
    return this.http.post(this.baseURL, account);
  }

  getAccountById(accountNumber: number) {
    return this.http.get(this.baseURL + `/${accountNumber}`);
  }

  getAccountList() {
    return this.http.get(this.baseURL);
  }

  putAccount(account: Account) {
    return this.http.put(this.baseURL + `/${account.accountNumber}`, account);
  }

  deleteAccount(accountNumber: number) {
    return this.http.delete(this.baseURL + `/${accountNumber}`);
  }
}


