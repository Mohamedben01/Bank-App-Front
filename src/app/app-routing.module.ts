import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes : Routes = [
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'bank-account', 
    loadChildren: () => import('./bank-account/bank-account.module').then((m) => m.BankAccountModule),
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: 'customers', 
    pathMatch: 'full' 
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
