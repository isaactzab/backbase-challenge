import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITransaction } from '../../interface/transaction';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent{

  @Input() public set toAccount(toAccount: string){
    this.ToAccount = toAccount;
  }
  @Input() public set amount(amount: number){
    
    this.DefaultAmount = this.Amount = amount;
  }

  ToAccount: string;
  DefaultAmount: number;
  Amount: number;

  @Input() fromAccount: string;
  @Output() update: EventEmitter<any> = new EventEmitter();

  submitEvent(): void {
    const transaction = {
      transaction: {
        amountCurrency: {
          amount: this.Amount
        }
      },
      merchant: {
        name: this.ToAccount
      }
    } as unknown as ITransaction;
    this.update.emit(transaction);
    this.Amount = this.DefaultAmount;
  }
}
