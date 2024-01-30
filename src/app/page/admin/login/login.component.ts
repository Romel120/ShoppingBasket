import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj : any = {
    username : '' ,
    password : '' 
  }
  constructor(private router : Router){}

  onLogin(){
    if(this.loginObj.username == "admin" && this.loginObj.password == "ADMIN"){
      this.router.navigateByUrl('/products')
      console.log('working')
    }
    else{
      alert('Wrong mail or password') ;
    }
  }
}
