import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(
    private transactionService: TransactionsService
  ) { }

  transactions: Transaction[];

  // transactions: any = [
  //   { name: 'The Tea Lounge', amount: '-98'},
  //   { name: 'Texaco', amount: '-12'}
  // ];

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe( transactions => {
      this.transactions = transactions;
      console.log(transactions);
    } );
  }
}
