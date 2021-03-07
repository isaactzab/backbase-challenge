import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  checkingNumber = '4692';
  balance = 5824.76;
  constructor(
    private transactionService: TransactionsService
  ) { }

  transactions: Transaction[];

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
