import { Transaction } from './../../services/transaction.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'TransactionFilter'
})

export class TransactionFilterPipe implements PipeTransform {
    transform(transactions: Transaction[], searchKeyword: string, AccoTransactionunt: Transaction): Transaction[] {
        if (!transactions || !searchKeyword) {
            return transactions;
        } else {
            return transactions.filter(transactions =>
                transactions.accountNumber.toString().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                transactions.date.toString().indexOf(searchKeyword.toLowerCase()) !== -1) ;
        }
    }
}
