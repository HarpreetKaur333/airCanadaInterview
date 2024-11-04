import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,BrowserModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  isAuthenticated$; // Access the service property

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;

  } // Inject the service here

  ngOnInit() {}

  login() {
    this.authService.login(); // Call the login method on the service
  }

  logout() {
    this.authService.logout(); // Call the logout method on the service
  }
}
