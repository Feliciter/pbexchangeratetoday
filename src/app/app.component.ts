import { Component } from '@angular/core';
import { PrivatCurrService } from './getdata.service';

@Component({
  selector: 'app-root',
  providers: [PrivatCurrService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private privatCurrService: PrivatCurrService) {}

  title = 'PrivatBank exchange rate on';
  datatoday = this.privatCurrService.getCurrentdate();
}
