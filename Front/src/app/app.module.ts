import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeadComponent } from './Components/head/head.component';
import { SearchComponent } from './Components/search/search.component';
import { JourneyComponent } from './Components/journey/journey.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './services/service-api.service';
import {ServiceCurrencyService} from './services/currency/service-currency.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeCurrencyPipe } from './pipe/pipe-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SearchComponent,
    JourneyComponent,
    PipeCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,ServiceCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
