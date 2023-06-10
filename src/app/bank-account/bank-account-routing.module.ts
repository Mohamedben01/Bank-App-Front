import { NgModule } from '@angular/core';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '', 
    component: BankAccountComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class BankAccountRoutingModule { }
