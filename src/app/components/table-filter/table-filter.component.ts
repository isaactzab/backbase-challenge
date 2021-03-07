import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
  @Output() filterUpdate: EventEmitter<any> = new EventEmitter();
  constructor() { }

  search: string;
  sortBy: string;

  ngOnInit(): void {
  }

  onSortUpdate(evt): void {
    this.sortBy = evt.target.value;
    this.filterUpdate.emit({search: this.search, sortBy: this.sortBy});
  }

  onSearchUpdate(evt): void {
    this.search = evt.target.value;
    this.filterUpdate.emit({search: this.search, sortBy: this.sortBy});
  }

}
