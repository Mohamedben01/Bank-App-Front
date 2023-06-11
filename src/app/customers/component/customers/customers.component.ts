import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() resp!: string;
  
  customers: Customer[] = [];
  isVisible: boolean = false;
  isSaved: boolean = false;
  checked: string = '';
  constructor(
    private customerService: CustomerService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.allCustomers();
  }

  allCustomers(): void{
    this.customerService.getAllCustomers().subscribe(response => {
      this.customers = response;
    })
  }

  showModal(): void{
    this.isVisible = !this.isVisible;
    this.isSaved = false;
  }
  handle(event:any){
    this.checked = event;
  }
  saveCustomer(){
    this.checked == 'error' ? this.isSaved = false : this.isSaved = true;
    if (this.checked == 'success') {
      this.isSaved = false
      this.showModal()
      this.allCustomers()
    }
    this.checked = ''
  }
 
  editCustomer(){}
  deleteCustomer(customerId: number){
    this.customerService.deleteCustomer(customerId).subscribe( response => {
      this.message.success('Customer deleted successfully')
      this.allCustomers()
    })
  }
}
