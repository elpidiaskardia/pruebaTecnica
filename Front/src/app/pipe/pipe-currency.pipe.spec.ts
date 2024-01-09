import { PipeCurrencyPipe } from './pipe-currency.pipe';
import { ServiceCurrencyService } from '../services/currency/service-currency.service';

describe('PipeCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeCurrencyPipe(new ServiceCurrencyService());
    expect(pipe).toBeTruthy();
  });
});
