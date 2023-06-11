import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl: string = env.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl+'customers');
  }

  saveCustomer(customer: any){
    return this.http.post(this.baseUrl+'customers',customer);
  }
  deleteCustomer(customerId: number){
    return this.http.delete(this.baseUrl+'customers/'+customerId);
  }
  editCustomer(){}
}
