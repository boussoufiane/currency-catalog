import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencyList : Currency[] = [];
  numberCurrenciesPerPage = 10 ; 
  readonly numberCurrenciesPerPageList :number[] = [10 , 50 , 100] ;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencyList();
  }

  getCurrencyList(): void {
      this.currencyService.getCurrencyList().subscribe((response)=> {
      this.currencyList = response['data'];
      console.log(this.currencyList);
    });
  }

  getCurrencyListByParam(numberCurrenciesPerPage : number): void {
    this.currencyService.getCurrencyListByParam(numberCurrenciesPerPage).subscribe((response)=> {
    this.currencyList = response['data'];
    console.log(this.currencyList);
  });
}

onchangeNumberCurrenciesPerPage(numberCurrenciesPerPage){
    this.numberCurrenciesPerPage = numberCurrenciesPerPage ;
    this.getCurrencyListByParam(numberCurrenciesPerPage) ;
  }


  
}
