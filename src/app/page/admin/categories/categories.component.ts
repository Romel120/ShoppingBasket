import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  products$ : Observable<any> | undefined ;
  constructor(private product : ProductsService){
    this.products$ = this.product.getAllCategories().pipe(
      map((res : any) => {
        return res ;
      })
    )
  }
}

