import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private API = '/api/transactions';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) {}

  getTransactions(): Observable <Transaction[]> {
    return this.http.get<Transaction[]>(this.API);
  }
  updateTransactions(transaction: Transaction): Observable<any> {
    return this.http.put(this.API, transaction, this.httpOptions);
  }
  addTransactions(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.API, transaction, this.httpOptions);
  }
}
