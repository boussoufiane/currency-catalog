import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency } from './currency';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  pageNumber : number = 1 ; 
  pagesize : number = 10 ; 


  private readonly BASE_URL = "https://api.openfintech.io/v1/currencies"
  private readonly FILTER_URL = "https://api.openfintech.io/v1/currencies"
  private readonly HOSTNAME = "https://api.openfintech.io"
  uri : string = '?page[number]=' + this.pageNumber + '&page[size]=' + this.pagesize ;

  constructor( private  http: HttpClient) {}


  getCurrencyList(): Observable<any>{
      return this.http.get(this.FILTER_URL + this.uri);
  }

  
  getCurrencyListByParam(numberCurrenciesPerPage : number , pageNumber : number): Observable<any>{
    let uri = '?page[number]=' + pageNumber + '&page[size]=' + numberCurrenciesPerPage ;

    return this.http.get(this.FILTER_URL + uri);
}

  getCurrencyById(id : string) : Observable<any>{
    return this.http.get(this.BASE_URL + '/' + id);
  }

  getCurrencyListLink(link : string): Observable<any>{
    return this.http.get(this.HOSTNAME + link);
  }
  



}
