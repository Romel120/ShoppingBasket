//produc.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/api/customers'; // Adjust the URL as per your backend

  constructor(private http: HttpClient) {}

  createCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, customerData);
}

  login(username: string, password: string): Observable<any> {
    const body = { username, password }; 
    return this.http.post(`${this.apiUrl}/login`, body);
  }
  
  getCustomerDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
