import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, DatatableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule {}
