import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() {}

  getTransactions(): Transaction[] {
    return [] as Transaction[];
  }
}
