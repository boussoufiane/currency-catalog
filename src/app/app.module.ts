import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

const appRoutes: Routes = [
  { path: '', component: CurrencyListComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent },


];

@NgModule({
  declarations: [
    AppComponent , 
    CurrencyListComponent ,
    CurrencyDetailsComponent 
  ],
  imports: [
    BrowserModule , 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
