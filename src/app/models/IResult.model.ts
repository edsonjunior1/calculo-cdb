export interface IResult {
  grossProfit: number;
  netProfit: number;
}

export function validateValueAndTerms(value: number, terms: number): void {
  if (value <= 0 || terms < 2) {
    throw new Error("O valor e o prazo devem ser positivos, com o prazo maior que 1 mês.");
  }
}
