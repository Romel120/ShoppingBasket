import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  username: string | null = null;
  categoryList : any [] = [] ;
  isLoggedIn: boolean = false;

  constructor(private productServ: ProductsService , private router : Router , private route: ActivatedRoute , private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllCategory() ;
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || null;
      this.isLoggedIn = params['isLoggedIn'] === 'true';
      
      if (this.username) {
        console.log(`Received username in LandingComponent: ${this.username}`);
        // Handle the received username and isLoggedIn as needed
      }
    });
  }
  
getAllCategory() {
    this.productServ.getAllCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
  navigateToCategory(id : any){
    this.router.navigate([`ShoppingBasket/products/${id}`]) ;
  }

  logout(): void {
    // Add logout functionality (clear user data, navigate to home, etc.)
    // For now, let's just log out and navigate to the home page
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  

  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
