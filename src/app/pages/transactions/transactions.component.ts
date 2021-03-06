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

  constructor(
    private transactionService: TransactionsService
  ) { }

  transactions: ITransaction[] = [];
  search: string;
  sortBy: string;
  checkingNumber = '4692';
  balance = 5824.76;
  defaultToAccount = 'Georgia Power Electric Company';
  defaultAmount = 0.00;
  transferFormState = false;
  defaultFromAccount = () => `Free Checking(${this.checkingNumber}) - $${this.balance}`;


  onTransferFormSubmit(data: ITransaction): void {
    if (data.transaction.amountCurrency.amount > this.balance + 500) {
      alert('Insufficient balance in that account to complete the transaction.');
      return;
    }
    if(data.transaction.amountCurrency.amount === 0){
      alert('Transfer amount must be greater than $0');
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

    this.transferFormState = false;
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
  openTransferForm(): void {
    this.transferFormState = true;
  }
}
