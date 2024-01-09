import { Pipe, PipeTransform } from '@angular/core';
import { ServiceCurrencyService } from '../services/currency/service-currency.service';
import { Subscription } from 'rxjs';
@Pipe({
  name: 'pipeCurrency',
  pure: false

})
export class PipeCurrencyPipe implements PipeTransform {

  public value: string = ''
  private listen$: Array<Subscription> = []

  constructor(private serviceCurrency: ServiceCurrencyService) {}

  transform(price: number): any  {
    const observer$ = this.serviceCurrency.currency$
    .subscribe((currency) => {
      this.value = `${this.serviceCurrency.getCurrency(price)} ${currency}`;

    })
    this.listen$ = [observer$];

    return this.value;
  }
  
  ngOnDestroy(): void {
    this.listen$.forEach(a => a.unsubscribe())
  }


}
