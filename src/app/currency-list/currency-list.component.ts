import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';
import { CurrencyPagination } from '../currency-pagination';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencyList : Currency[] = [];
  numberCurrenciesPerPage : number = 10 ;
  pageNumber : number = 1 ;
  readonly numberCurrenciesPerPageList :number[] = [10 , 50 , 100] ;

  currencyPagination :CurrencyPagination ;


  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencyList();
  }

  getCurrencyList(): void {
      this.currencyService.getCurrencyList().subscribe((response)=> {
      this.currencyList = response['data'];
      this.currencyPagination = response['links'];
      console.log(this.currencyList);
      console.log(this.currencyPagination);
    });
  }

  getCurrencyListByParam(numberCurrenciesPerPage : number , pageNumber : number): void {
    this.currencyService.getCurrencyListByParam(numberCurrenciesPerPage , pageNumber).subscribe((response)=> {
    this.currencyList = response['data'];
    this.currencyPagination = response['links'];
    console.log(this.currencyList);
    console.log(this.currencyPagination);
  });
}



onchangeNumberCurrenciesPerPage(numberCurrenciesPerPage){
    this.numberCurrenciesPerPage = numberCurrenciesPerPage ;
    this.getCurrencyListByParam(numberCurrenciesPerPage , this.pageNumber) ;
  }

  getPrevious(){
    console.log("previous");
    if(this.pageNumber > 1 ){
      this.pageNumber -- ; 
      this.getCurrencyListByParam(this.numberCurrenciesPerPage , this.pageNumber);
    }
  }

  getNext(){
    console.log("next");
    this.pageNumber ++ ; 
    this.getCurrencyListByParam(this.numberCurrenciesPerPage , this.pageNumber);

  }

  managePagination(link){
    console.log(link);
    this.currencyService.getCurrencyListLink(link).subscribe((response)=> {
      this.currencyList = response['data'];
      this.currencyPagination = response['links'];
      console.log(this.currencyList);
      console.log(this.currencyPagination);
    });;
  }


  
}
