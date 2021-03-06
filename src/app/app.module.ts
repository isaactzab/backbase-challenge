import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { TransactionsComponent } from './page/transactions/transactions.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TableComponent } from './components/table/table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TransferFormComponent,
    PanelComponent,
    TransactionsComponent,
    RecentTransactionsComponent,
    TableFilterComponent,
    TableDataComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
