import { Component, OnInit } from '@angular/core';
import { PrivatCurrService } from '../getdata.service';
import { Pbmodel } from '../pbmodel';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  providers: [PrivatCurrService],
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  constructor(private privatCurrService: PrivatCurrService) {}
  dataset: Pbmodel;
  datasetexchangeRate: {};

  ngOnInit() {
    this.privatCurrService.getCurr().subscribe(
      response => {
        this.dataset = response;
        this.datasetexchangeRate = response.exchangeRate;
      },
      error => console.log(error)
    );
  }
}
