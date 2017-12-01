import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';
import { CurrencySelectComponent } from  './currency-select.component';
import { FixedPipe } from './fixed.pipe';

@Component({
  selector: 'currency-converter',  
  template: `
    Convert: <input type="number" [(ngModel)]="baseAmount"
      [ngClass]="{error:isInvalid(baseAmount), warning: baseAmount < 0}"
      > 
      <currency-select [(selected)]="baseCurrency"></currency-select>
     = <strong>{{targetAmount | fixed}}</strong> 
      <currency-select [(selected)]="targetCurrency"
        (selectedChange)="targetCurrency=$event"></currency-select>
     <template [ngIf]= "isInvalid(baseAmount)">
        <p>Please enter a valid amount</p>
     </template>
     <p *ngIf!= "isInvalid(baseAmount)">Exchange Rate 
        <strong>{{get_ExchangeRate() | fixed:4}}</strong>
     </p>   
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error {
        background-color: #ff6666
    }
  `]
})
export class AppComponent {

  baseCurrency = 'USD';
  targetCurrency = 'GBP';
  baseAmount = 1;
  exchangeRateNow = 0.70;
  
  constructor(private exchangeService: ExchangeService){
  };
  
  get_ExchangeRate()
  {
    return this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
  }
  
  get targetAmount() {
    const exchangeRate = this.exchangeService
    .getExchangeRate(this.baseCurrency, this.targetCurrency);
    return (this.baseAmount * exchangeRate);
  }
  isInvalid(value)
  {
    return !Number.isFinite(value);
  }
  onSetClick(event){
    console.info('selectedChange:', event);
  }
}
