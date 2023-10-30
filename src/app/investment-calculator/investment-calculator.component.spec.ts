import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCalculatorComponent } from './investment-calculator.component';
import { InvestmentService } from '../services/investiment.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InvestmentCalculatorComponent', () => {
  let component: InvestmentCalculatorComponent;
  let fixture: ComponentFixture<InvestmentCalculatorComponent>;

  beforeEach(() => {
    const investmentService = new InvestmentService();
    const formBuilder = new FormBuilder();

    TestBed.configureTestingModule({
      declarations: [InvestmentCalculatorComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: InvestmentService, useValue: investmentService },
        { provide: FormBuilder, useValue: formBuilder }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(InvestmentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message if the form is invalid', () => {
    component.investmentForms.get('value')?.setValue('');

    component.calculateInvestiment();

    expect(component.investmentForms.invalid).toBeTruthy();
  });

  it('should not accept negative values for the value and term fields', () => {
    component.investmentForms.get('value')?.setValue(-100);
    component.investmentForms.get('term')?.setValue(-1);

    expect(() => component.calculateInvestiment())
      .toThrowError('O valor e o prazo devem ser positivos, com o prazo maior que 1 mês.');
  });

  it('should accept decimal values for the value field', () => {
    component.investmentForms.get('value')?.setValue(100.50);
    component.investmentForms.get('term')?.setValue(15);

    component.calculateInvestiment();

    expect(component.investmentForms.valid).toBeTruthy();
  });

  it('should calculate the final and after-taxes profit values correctly', () => {
    component.investmentForms.get('value')?.setValue(1200);
    component.investmentForms.get('term')?.setValue(2);

    component.calculateInvestiment();

    expect(component.finalValue).toEqual(1223.4413740799998);
    expect(component.afterTaxesProfit).toEqual(1039.9251679679999);
  });

  it('should reset the final and after-taxes profit values when the form is reset', () => {
    component.investmentForms.get('value')?.setValue(10000);
    component.investmentForms.get('term')?.setValue(2);

    component.calculateInvestiment();

    component.onReset(true);

    expect(component.finalValue).toEqual(0);
    expect(component.afterTaxesProfit).toEqual(0);
  });
});
