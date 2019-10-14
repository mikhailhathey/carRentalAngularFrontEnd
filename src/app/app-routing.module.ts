import { AddressDetailsComponent } from './address-details/address-details.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const routes: Routes = [
  { path: '', redirectTo: 'address', pathMatch: 'full' },
  { path: 'addresss', component: AddressListComponent },
  { path: 'add', component: CreateAddressComponent },
  { path: 'update/:addressId', component: UpdateAddressComponent },
  { path: 'details/:addressId', component: AddressDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
