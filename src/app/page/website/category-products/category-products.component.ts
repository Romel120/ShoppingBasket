//category-products.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss'
})
export class CategoryProductsComponent {
  activeCategoryId: any;
  products: any[] = [];
  loggedInObj: any = {};

  constructor(private activatedRoute: ActivatedRoute, private prodSrv: ProductsService) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.activeCategoryId = res.id;
      console.log(this.activeCategoryId) ;
      this.loadProducts();
    });
  }

  loadProducts() {
    // debugger ;
    this.prodSrv.getProductsByCategory(this.activeCategoryId).subscribe((res: any) => {
      this.products = res.data;
    });
  }
}