import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  categoryList : any [] = [] ;

  constructor(private productServ: ProductsService , private router : Router) { }

  ngOnInit(): void {
    this.getAllCategory() ;
  }
  
getAllCategory() {
    this.productServ.getAllCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
  navigateToCategory(id : any){
    this.router.navigate(['/products' , id])
  }

  

  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
