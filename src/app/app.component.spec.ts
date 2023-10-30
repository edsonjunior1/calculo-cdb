import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';

describe('AppComponent', () => {
  const formBuilder = new FormBuilder();
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, RouterModule.forRoot([]), ReactiveFormsModule],
    declarations: [AppComponent, InvestmentCalculatorComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      { provide: FormBuilder, useValue: formBuilder}
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
