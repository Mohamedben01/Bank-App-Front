import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule) },
  { path: 'bank-account', loadChildren: () => import('./bank-account/bank-account.module').then((m) => m.BankAccountModule) },
  { path: '', redirectTo: 'customers', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
