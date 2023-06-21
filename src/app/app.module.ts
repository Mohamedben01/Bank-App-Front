import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroModule } from './shared/ng-zorro/ng-zorro.module';
import { AppInterceptorInterceptor } from './core/interceptor/app-interceptor.interceptor';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/initializeKeycloak';
import { AccessControlDirective } from './shared/directives/access-control.directive';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AccessControlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersModule,
    BankAccountModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule,
    KeycloakAngularModule
  ],
  exports: [
    NgZorroModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
