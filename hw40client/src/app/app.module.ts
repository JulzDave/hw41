import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './comp/order/order.component';
import { AcquisitionsComponent } from './comp/acquisitions/acquisitions.component';
import { OrderRoutingModule } from './comp/order/order-routing.module';
import { AcquisitionsRoutingModule } from './comp/acquisitions/acquisitions-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AcquisitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderRoutingModule,
    AcquisitionsRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
