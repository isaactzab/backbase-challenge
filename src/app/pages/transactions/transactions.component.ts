import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { ITransaction } from '../../interface/transaction';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: ITransaction[] = [];
  search: string;
  sortBy: string;
  checkingNumber = '4692';
  balance = 5824.76;
  defaultToAccount = 'Georgia Power Electric Company';
  defaultAmount = 1000.00;
  defaultFromAccount = () => `Free Checking(${this.checkingNumber}) - $${this.balance}`;


  constructor(
    private transactionService: TransactionsService
  ) { }


  onTransferFormSubmit(data: ITransaction): void {
    if (data.transaction.amountCurrency.amount > this.balance) {
      alert('Insufficient balance in that account to complete the transaction.');
      return;
    }
    this.balance -= data.transaction.amountCurrency.amount;
    const transaction = {
      merchant: {
        name: this.defaultToAccount
      },
      categoryCode: `#fa0344`,
      transaction: {
        creditDebitIndicator: 'DBT',
        amountCurrency: {
          currencyCode: 'EUR',
          amount: data.transaction.amountCurrency.amount
        }
      },
      dates: {
        valueDate: Math.floor(Date.now() / 1000)
      }
    } as unknown;

    this.addTransaction(transaction as ITransaction);

  }

  filteredTransactions(): ITransaction[] {
    const sortFunctions = {
      dateASC: ({dates: {valueDate: a}}, {dates: {valueDate: b}}) => (+new Date(b) - +new Date(a)),
      dateDSC: ({dates: {valueDate: a}}, {dates: {valueDate: b}}) => (+new Date(a) - +new Date(b)),
      beneficiary: ({merchant: { name: a}}, {merchant: {name: b}}) => ((a > b) ? 1 : (a < b) ? -1 : 0),
      amount: (a, b) => {
        a = a.transaction.amountCurrency.amount;
        b = b.transaction.amountCurrency.amount;
        return a - b;
      }
    };

    const filtered = this.search
      ? this.transactions.filter((i) => i.merchant.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
      : this.transactions;


    const sorted = this.sortBy
      ? filtered.sort(sortFunctions[this.sortBy])
      : filtered;

    console.log(sorted);
    return sorted;
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  addTransaction(transaction: ITransaction): void {
    this.transactionService.addTransactions(transaction).subscribe( response => {
      this.getTransactions();
    });
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe( transactions => {
      this.transactions = transactions;
    } );
  }

  onFilterUpdate(filters: any): void {
    this.sortBy = filters.sortBy;
    this.search = filters.search;
  }
}
