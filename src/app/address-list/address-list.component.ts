import { AddressDetailsComponent } from '../address-details/address-details.component';
import { Observable } from 'rxjs';
import { AddressService } from '../address.service';
import { Address } from '../address';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresss: Observable<Address[]>;

  constructor(private addressService: AddressService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.addresss = this.addressService.getAddressList();
  }

  deleteAddress(addressId: string) {
    this.addressService.deleteAddress(addressId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  addressDetails(addressId: string){
    this.router.navigate(['details', addressId]);
  }

  updateAddress(addressId: string){
    this.router.navigate(['update', addressId]);
  }
}
