# CalculoCdb

This project aims to return the gross and net value of an amount (investment) entered by the user based on the rules:

The CDB calculation formula:
FinalValue = InitalValue x [1 +(CDI * BasicTax)]
Note: The formula only calculates the value of one month, the income from each month must be used to calculate the following months.

Consider the fixed values below: 
i. Basic Tax - 108%
ii. CDI - 0.09%

For tax calculation:
i. Up to 06 months: 22,5%
ii. Up to 12 months: 20%
iii. Up to 24 months: 17,5%
iv. Over 24 months: 15%

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

