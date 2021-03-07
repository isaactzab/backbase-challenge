import { Injectable } from '@angular/core';
import { ITransaction } from '../interface/transaction';
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

  getTransactions(): Observable <ITransaction[]> {
    return this.http.get<ITransaction[]>(this.API);
  }
  updateTransactions(transaction: ITransaction): Observable<any> {
    return this.http.put(this.API, transaction, this.httpOptions);
  }
  addTransactions(transaction: ITransaction): Observable<ITransaction> {
    return this.http.post<ITransaction>(this.API, transaction, this.httpOptions);
  }
}
