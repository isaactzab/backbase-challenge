import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  pattern = /^(\d+)\.(\d{2})/;
  constructor() { }

  ngOnInit(): void {
  }

}
