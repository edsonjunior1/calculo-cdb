import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';
import { B3OnlyIntegerDirective } from './utils/input-restriction.directive';
import { ResultComponent } from './investment-calculator/components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentCalculatorComponent,
    B3OnlyIntegerDirective,
    ResultComponent
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
