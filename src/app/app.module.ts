import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressListComponent } from './address-list/address-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAddressComponent } from './update-address/update-address.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAddressComponent,
    AddressDetailsComponent,
    AddressListComponent,
    UpdateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
