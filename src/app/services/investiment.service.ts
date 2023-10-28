import { Injectable } from '@angular/core';
import { IResult, validateValueAndTerms } from '../models/IResult.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private readonly BasicTax = 1.08;
  private readonly CDI = 0.009;
  private readonly taxValues: { [key: number]: number } = {
    6: 0.225,
    12: 0.20,
    24: 0.175,
  };

  public investmentCalculator(value: number, terms: number): IResult {
    validateValueAndTerms(value, terms);

    let FinalValue = value;

    for (let index = 1; index <= terms; index++) {
      FinalValue = FinalValue * (1 + (this.CDI * this.BasicTax));
    }

    const grossProfit = FinalValue;
    const taxes = this.taxValues[terms] ? grossProfit * this.taxValues[terms] : grossProfit * 0.15;
    const netProfit = grossProfit - taxes;

    return { grossProfit, netProfit };
  }
}

