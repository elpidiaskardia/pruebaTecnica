import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCurrencyService {
  public selectedCurrency:string = "USD";
  private conversion: { [key: string]: number }= {
    "USD": 1.0,
    "EUR": 0.94,
    "COP": 4070
  };
  currency$: BehaviorSubject<any> = new BehaviorSubject<any>(this.selectedCurrency)

  setSelectedCurrency(currency: string): void {
    this.selectedCurrency=currency;
    this.currency$.next(currency);
  }

  getCurrency(price: number): number {
    const currency = this.conversion[this.selectedCurrency];
    return price * currency;
  }
}
