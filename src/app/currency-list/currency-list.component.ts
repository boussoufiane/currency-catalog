import { Component, OnInit } from '@angular/core';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';
import { FilterFiedEnum } from '../model/filter-field-enum';
import { CurrencyPagination } from '../model/currency-pagination';



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
  filterValue :string ="";
  filterNameValue :string ="code";
  filterFieldNameList = FilterFiedEnum ;
  keys = Object.keys;

   readonly HOSTNAME = "https://api.openfintech.io";

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


  managePagination(link){
    console.log(link);
    this.currencyService.getCurrencyListLink(link).subscribe((response)=> {
      this.currencyList = response['data'];
      this.currencyPagination = response['links'];
      console.log(this.currencyList);
      console.log(this.currencyPagination);
    });;
  }

  filter(event: any){
    this.filterValue = event.target.value ;
    console.log("filter");
     console.log(event.target.value);
     console.log(this.filterNameValue);
     console.log(this.pageNumber);
     console.log(this.filterValue);
     let link = this.buildLink(this.pageNumber , this.numberCurrenciesPerPage , this.filterNameValue , 
      this.filterValue) ;
      console.log(link);
     this.managePagination(link); 
  }


  buildLink(pageNumber : number  , pageSize :number , filterName :string  , filterValue :string ) : string{
    console.log("buildLink");
   let link = "/v1/currencies?page[number]=" + pageNumber+"&page[size]="+ pageSize ;
   console.log(link);
   if(filterValue) {
      link = link + "&filter["+ this.filterNameValue + "]=" + filterValue ;
   }
   console.log(link);
   return link ;
  
 
  }

  onchangeFilterFieldName(filterNameValue){
    this.filterValue = "";
    this.filterNameValue = filterNameValue;
  }


  
}
