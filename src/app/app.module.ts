import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';
import { B3OnlyIntegerDirective } from './utils/integer-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentCalculatorComponent,
    B3OnlyIntegerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
