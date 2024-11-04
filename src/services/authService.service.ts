import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // Initial value is `false` meaning the user is not authenticated initially
 private isAuthenticated = new BehaviorSubject<boolean>(false);
 isAuthenticated$ = this.isAuthenticated.asObservable();

 login() {
   this.isAuthenticated.next(true); // User is authenticated
 }

 logout() {
   this.isAuthenticated.next(false); // User is not authenticated
 }
}
