import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.allCustomers();
  }

  allCustomers(){
    this.customerService.getAllCustomers().subscribe(response => {
      this.customers = response;
    })
  }
  // listOfData: Customer[] = [
  //   {
  //     id: 1,
  //     name: "Hassan",
  //     email: "Hassan@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     name: "Imane",
  //     email: "Imane@gmail.com"
  //   },
  //   {
  //     id: 3,
  //     name: "Mohamed",
  //     email: "Mohamed@gmail.com"
  //   }
  // ]

}
