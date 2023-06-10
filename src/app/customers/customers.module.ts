import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './component/customers/customers.component';
import { NgZorroModule } from '../shared/ng-zorro/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent
  ],
  imports: [
    CustomerRoutingModule,
    NgZorroModule,
    CommonModule
  ]
})
export class CustomersModule { }
