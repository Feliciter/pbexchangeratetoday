import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pbmodel } from './pbmodel';
import { DatePipe } from '@angular/common';


@Injectable()
export class PrivatCurrService {
  datePipeString: string;
  private PrivatCurrUrl: string;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.datePipeString = this.datePipe.transform(Date.now(), 'dd.MM.yyyy');
    this.PrivatCurrUrl = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${this.datePipeString}`;
  }

  getCurr(): Observable<Pbmodel> {
    return this.http.get<Pbmodel>(this.PrivatCurrUrl);
  }

  getCurrentdate() {
    return this.datePipeString;

  }

}
