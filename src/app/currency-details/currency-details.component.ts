import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currencyDetail : Currency ; 
  currencyId : string ; 

  constructor(private route: ActivatedRoute ,
    private currencyService: CurrencyService,
  ) { 
    this.route.params.subscribe( params => {
      console.log(params) ; 
      this.currencyId = params.id ;
      
    });
  }

  ngOnInit() {
    this.getCurrencyDetails();
  }

  getCurrencyDetails(): void {
    this.currencyService.getCurrencyById(this.currencyId).subscribe((response)=> {
    this.currencyDetail = response['data'];
    console.log(this.currencyDetail);
  });
}

}
