//auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private loggedInUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    setLoggedInUser(user: any): void {
      this.loggedInUserSubject.next(user);
    }
  
    getLoggedInUser(): Observable<any> {
      return this.loggedInUserSubject.asObservable();
    }
  
    logout(): void {
      // Implement logout logic (clear user data, etc.)
      this.loggedInUserSubject.next(null);
    }
}
