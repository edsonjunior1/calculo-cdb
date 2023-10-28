import { Component } from '@angular/core';
import { InvestmentService } from '../services/investiment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment-calculator',
  templateUrl: './investment-calculator.component.html',
  styleUrls: ['./investment-calculator.component.scss']
})
export class InvestmentCalculatorComponent {
  public investmentForms: FormGroup;
  public finalValue = 0;
  public afterTaxesProfit = 0;

  constructor(
    private investmentService: InvestmentService,
    private formBuilder: FormBuilder
  ) {
    this.investmentForms = this.formBuilder.group({
      value: [null, Validators.required],
      term: [null, Validators.required]
    });
  }



  public calculateInvestiment() {
    if (this.investmentForms.valid) {
      const value = this.investmentForms.get('value')?.value;
      const term = this.investmentForms.get('term')?.value;

      const { grossProfit, netProfit } = this.investmentService.investmentCalculator(value, term);
      this.finalValue = grossProfit;
      this.afterTaxesProfit = netProfit;
    }
  }

  public onReset(eventData: boolean) {
    if (eventData) {
      this.finalValue = 0;
      this.afterTaxesProfit = 0;
      this.investmentForms.reset();
    }
  }

}
