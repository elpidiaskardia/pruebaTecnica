import { Component, OnInit } from '@angular/core';
import { ServiceCurrencyService } from '../../services/currency/service-currency.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  showCurrencyDropdown = false;
  selectedCurrency: string = 'USD';

  constructor(private serviceCurrency: ServiceCurrencyService) {

  }
  ngOnInit(): void {
    
  }

  toggleCurrencyDropdown() {
    this.showCurrencyDropdown = !this.showCurrencyDropdown;
  }

  changeCurrency(currency: string) 
  {
    this.selectedCurrency = currency;
    this.serviceCurrency.setSelectedCurrency(currency);
    this.toggleCurrencyDropdown();
    }
}