import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FixerCurrencyModel } from './fixer.currency.model';

@Injectable()
export class ExchangeService {
  errorHandler = error => console.error('ExchangeService error', error);
  private RatesApiUrl = 'http://api.fixer.io';


  USDXRates:FixerCurrencyModel;
  supportedCurrencies=[];
  
  constructor(private http: Http){     
    this.http.get(`${this.RatesApiUrl}/latest?base=USD`)
        .toPromise()
        .then(response => { 
           this.USDXRates = response.json();      
           this.supportedCurrencies.push(this.USDXRates.base);
            for (var key in this.USDXRates.rates) {
            
                this.supportedCurrencies.push(key);
            }    
           })
           .catch(this.errorHandler);
  }

  getExchangeRate(baseCurrency: string, targetCurrency: string) {    
    var exchangeRate;
    var XChangeRates: FixerCurrencyModel;
    
    if (baseCurrency === targetCurrency) {
        return 1;
    }
    if (baseCurrency === 'USD' && this.USDXRates)
    { 
        return this.USDXRates.rates[targetCurrency];
    }
    else if (!(baseCurrency === 'USD')) {
        this.http.get(`${this.RatesApiUrl}/latest?base=${baseCurrency}`)
            .toPromise()
            .then(response => { 
                XChangeRates = response.json();
                exchangeRate = XChangeRates.rates[targetCurrency];
                console.info(exchangeRate);
                return exchangeRate;
            })
            .catch(this.errorHandler);
    }
       
  }
}
