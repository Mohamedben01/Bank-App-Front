import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private keycloak: KeycloakService) {}
  
  logout(){
    this.keycloak.logout();
  }
}
