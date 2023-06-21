import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { User } from './shared/ng-zorro/models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  userName: string = 'Bank Application';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUserInfo()
  }
  getUserInfo(){
    this.authService.userInfo().then(resp => this.userName = resp?.firstName+' '+resp?.lastName)
  }
  logout(){
    this.authService.logout();
  }
}
