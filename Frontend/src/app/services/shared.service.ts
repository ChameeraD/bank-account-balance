import { Account } from './account.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  accnumber: number;
  constructor() { }
  private data: number;

  setOption(number: number) {
     this.data = number;
   }

   getOption() {
     return this.data;
   }

}
