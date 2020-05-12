import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SKUComponent } from './sku/sku.component';
import { TCOComponent } from './tco/tco.component';
import { TariffComponent } from './tariff/tariff.component';

@NgModule({
  declarations: [
    AppComponent,
    SKUComponent,
    TCOComponent,
    TariffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
