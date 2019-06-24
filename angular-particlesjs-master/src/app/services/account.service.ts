import { Account, AccountType } from './account.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  selectedAccount: Account;
  account: Account[];
  accounttype: AccountType[];
  selectedAccountType:AccountType;
  type: string;

  readonly baseURL = 'http://localhost:4201/account';
  readonly baseURL2 = 'http://localhost:4201/account/accounttype';
  constructor(private http: HttpClient) {}

  postAccount(account: Account) {
    return this.http.post(this.baseURL, account);
  }

  getAccountById(accountNumber: number) {
    return this.http.get(this.baseURL + `/details/${accountNumber}`);
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

  postAccountType(accountType: AccountType) {
    return this.http.post(this.baseURL2, accountType);
  }
  getAccountTypeById(typeId: number) {
    return this.http.get(this.baseURL2 + `/${typeId}`);
  }

  getAccountTypeList() {
    return this.http.get(this.baseURL2);
  }

  getAccountListByTypeId(typeId: number){
    console.log(typeId)
    return this.http.get(this.baseURL + `/typeId/${typeId}`);
  }
}


