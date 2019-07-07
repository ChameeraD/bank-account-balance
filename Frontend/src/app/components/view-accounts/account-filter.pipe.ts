import { Account } from './../../services/account.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'AccountFilter'
})

export class AccountFilterPipe implements PipeTransform {
    transform(accounts: Account[], searchKeyword: string, Account: Account): Account[] {
        if (!accounts || !searchKeyword) {
            return accounts;
        } else {
            return accounts.filter(accounts =>
                accounts.accountNumber.toString().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                accounts.region.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1) ;
        }
    }
}
