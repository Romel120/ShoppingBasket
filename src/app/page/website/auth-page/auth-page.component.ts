import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {
  loginForm = { username: '', password: '' };
  signupForm = {
    newUsername: '',
    newEmail: '',
    newMobile: '',
    newPassword: '',
};


  constructor(private customerService: CustomerService , private router : Router , private authService : AuthService) {}

  onLoginSubmit(): void {
    const { username, password } = this.loginForm;
    this.customerService.login(username, password).subscribe(
      (response) => {
        alert('Login successful');
        const isLoggedIn = true;  // Set your boolean value
        
        this.router.navigate(['/ShoppingBasket'], { queryParams: { username, isLoggedIn } });
      },
      (error) => {
        alert('Login failed');
        console.error('Login failed:', error);
      }
    );
  }

  onSignupSubmit(): void {
    const { newUsername, newEmail, newMobile, newPassword } = this.signupForm;

    // Call the customer service to create a new customer
    this.customerService.createCustomer({ username: newUsername, email: newEmail, mobile: newMobile, password: newPassword })
        .subscribe(
            (response) => {
                alert('Signup successful');
                // Optionally, automatically log in the user after signup
                this.authService.setLoggedInUser(response);
                this.router.navigateByUrl('/');
            },
            (error) => {
                alert('Signup failed');
                console.error('Signup failed:', error);
            }
        );
}

  
  getCustomerDetails(): void {
    this.customerService.getCustomerDetails().subscribe(
      (customers) => {
        console.log('Customers:', customers);
        // Handle the fetched customer details as needed
      },
      (error) => {
        console.error('Error fetching customer details:', error);
      }
    );
  }
}
