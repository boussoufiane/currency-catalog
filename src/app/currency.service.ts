import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency } from './currency';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly URL = "https://api.openfintech.io/v1/currencies"

  constructor( private  http: HttpClient) {}


  getCurrencyList(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.URL)
    
    ;
    
  }
}
