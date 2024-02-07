import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-website-products',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './website-products.component.html',
  styleUrl: './website-products.component.scss'
})
export class WebsiteProductsComponent implements OnInit {

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

  getAllCategory() {
    this.productServ.getAllCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
    
  }
}
