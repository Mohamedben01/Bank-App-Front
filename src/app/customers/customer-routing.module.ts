import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './component/customers/customers.component';

const routes : Routes = [
  {
    path: '', 
    component: CustomersComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
