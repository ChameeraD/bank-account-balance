import { Transaction } from './transaction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}
  selectedTransaction1: Transaction;
  selectedTransaction2: Transaction;
  transaction: Transaction[];
  type: string;

  // tslint:disable-next-line:quotemark
  readonly baseURL = "http://localhost:4201/transaction";


  postTransaction(transaction: Transaction) {
    return this.http.post(this.baseURL, transaction);
  }

  getTransactionById(transactionId: number) {
    return this.http.get(this.baseURL + `/${transactionId}`);
  }

  getTransactionByAccountId(accountNumber: number) {
    return this.http.get(this.baseURL + `/accountId/${accountNumber}`);
  }

  getTransactionList() {
    return this.http.get(this.baseURL);
  }

  putTransaction(transaction: Transaction) {
    return this.http.put(this.baseURL + `/${transaction.transactionId}`, transaction);
  }

  deleteTransaction(transactionId: number) {
    return this.http.delete(this.baseURL + `/${transactionId}`);
  }

}
