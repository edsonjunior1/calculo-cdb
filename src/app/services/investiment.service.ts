import { Injectable } from '@angular/core';
import { IResult } from '../models/IResult.model';

@Injectable({
  providedIn: 'root'
})
export class InvestimentService {

  investimentsCalculator(value: number, terms: number): IResult {
    if (value <= 0 || terms < 2) {
      throw new Error("O valor e o prazo devem ser positivos, com o prazo maior que 1 mês.");
    }

    const TB = 1.08;
    const CDI = 0.009;
    let VF = value;

    for (let index = 1; index <= terms; index++) {
      VF = VF * (1 + (CDI * TB));
    }

    const grossProfit = VF;
    const taxValues: { [key: number]: number } = {
      6: 0.225,
      12: 0.20,
      24: 0.175,
    };
    const taxes = taxValues[terms] ? grossProfit * taxValues[terms] : grossProfit * 0.15;
    const netProfit = grossProfit - taxes;

    return { grossProfit, netProfit }
  }
}
