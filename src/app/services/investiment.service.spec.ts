import { TestBed } from '@angular/core/testing';
import { InvestimentService } from './investiment.service';

describe('InvestimentService', () => {
  let service: InvestimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error if the value is less than or equal to zero', () => {
    const value = 0;
    const terms = 12;

    expect(() => service.investimentsCalculator(value, terms)).toThrowError(
      'O valor e o prazo devem ser positivos, com o prazo maior que 1 mês.'
    );
  });

  it('should throw an error if the terms is less than or equal to one', () => {
    const value = 1000;
    const terms = 1;

    expect(() => service.investimentsCalculator(value, terms)).toThrowError(
      'O valor e o prazo devem ser positivos, com o prazo maior que 1 mês.'
    );
  });

  it('should calculate the correct future value for edge cases', () => {
    const value1 = 10;
    const terms1 = 12;
    const expectedGrossValue1 = 11.230820949653051;
    const expectedNetValue1 = 8.98465675972244;

    const result1 = service.investimentsCalculator(value1, terms1);

    expect(result1.grossProfit).toBe(expectedGrossValue1);
    expect(result1.netProfit).toBe(expectedNetValue1);

    //Second Case
    const value2 = 1000;
    const terms2 = 2;
    const expectedGrossValue2 = 1019.5344783999999;
    const expectedNetValue2 = 866.6043066399999;

    const result2 = service.investimentsCalculator(value2, terms2);

    expect(result2.grossProfit).toBe(expectedGrossValue2);
    expect(result2.netProfit).toBe(expectedNetValue2);
  });

});
