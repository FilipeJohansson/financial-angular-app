import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardsComponent } from './cards-list/cards-list.component';
import { FormsModule } from '@angular/forms';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseComponent } from './expense/expense.component';
import { CardComponent } from './card/card.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { MoneyComponent } from './money/money.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailComponent,
    CardsComponent,
    ExpenseDetailComponent,
    ExpenseComponent,
    CardComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
