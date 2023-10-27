import { Component, OnInit } from '@angular/core';
import { InvestimentService } from '../services/investiment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment-calculator',
  templateUrl: './investment-calculator.component.html',
  styleUrls: ['./investment-calculator.component.scss']
})
export class InvestmentCalculatorComponent implements OnInit {
  public investmentForms: FormGroup;
  public fullProfit = 0;
  public afterTaxesProfit = 0;

  constructor(
    private investmentService: InvestimentService,
    private formBuilder: FormBuilder
  ) {
    this.investmentForms = this.formBuilder.group({
      value: [0, Validators.required],
      term: [0, Validators.required]
    });
  }


  ngOnInit(): void {
  }

  public calculateInvestiment() {
    if (this.investmentForms.valid) {
      const value = this.investmentForms.get('value')?.value;
      const term = this.investmentForms.get('term')?.value;

      const { grossProfit, netProfit } = this.investmentService.investimentsCalculator(value, term);
      this.fullProfit = grossProfit;
      this.afterTaxesProfit = netProfit;
    }
  }

  public reset() {
    this.fullProfit = 0;
    this.afterTaxesProfit = 0;
    this.investmentForms.reset();
  }

}
