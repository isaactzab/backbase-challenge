import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() icon: string;
  @Input() h1: string;
  @Input() h2: string;
  constructor() { }

  ngOnInit(): void {
  }

}
