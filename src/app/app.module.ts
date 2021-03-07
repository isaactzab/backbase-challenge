import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';
import { ReplacePipe } from './pipes/replace.pipe';

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
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
