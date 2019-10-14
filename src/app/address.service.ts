import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = 'http://localhost:8080/address';

  constructor(private http: HttpClient) { }

  getAddress(addressId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${addressId}`);
  }

  // tslint:disable-next-line:ban-types
  createAddress(address: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, address);
  }

  // tslint:disable-next-line:ban-types
  updateAddress(addressId: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${addressId}`, value);
  }

  deleteAddress(addressId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${addressId}`, { responseType: 'text' });
  }

  getAddressList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll/all`);
  }
}
