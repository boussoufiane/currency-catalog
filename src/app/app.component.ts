import { Component , OnInit} from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from './currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currencyList : Currency[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencyList();
  }

  getCurrencyList(): void {
     this.currencyService.getCurrencyList()
     .subscribe(currencies => this.currencyList = currencies);
  }
}
