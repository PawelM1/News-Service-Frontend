import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  username: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLogged = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLogged = this.authService.isLoggedIn();
    this.username = this.authService.getUsername();
  }

  goToUserProfile(){
    this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
    this.authService.logout();
    this.isLogged = false;
    this.router.navigateByUrl('/');
    window.location.reload();
  }
}
