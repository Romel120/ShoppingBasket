import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  categoryList : any [] = [] ;
  productList: any[] = [];

  constructor(private productServ: ProductsService , private router : Router) { }

  ngOnInit(): void {
    this.getAllCategory() ;
    this.getAllProducts();
  }
  getAllProducts() {
    this.productServ.getAllProducts().subscribe((res: any) => {
      this.productList = res.map((product: any) => ({ ...product, id: product._id }));
    });
  }

  navigateToCategory(id : any){
    this.router.navigate(['/products' , id])
  }

  getAllCategory() {
    this.productServ.getAllCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
