// product.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible: boolean = false;

  productObj: any = {
    "id": 0,
    "title": "",
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
  };

  categoryList : any [] = [] ;
  productList : any [] = [] ;

  constructor(private productServ : ProductsService){}

  ngOnInit(): void {
    this.getAllCategory() ;
    this.getAllProducts() ;
  }

  getAllProducts(){
    this.productServ.getAllProducts().subscribe((res : any) => {
      this.productList = res ;
    })
  }

  getAllCategory() {
    this.productServ.getAllCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

  onSave(){
    if (this.productObj.id === 0) {
      // Creating a new product
      this.productServ.saveProducts(this.productObj).subscribe(
        (res: any) => {
          alert('Product Created');
          this.getAllProducts();
        },
        (error) => {
          console.error('Error creating product:', error);
          alert('Product creation failed');
        }
      );
    } 
    else{
        alert("Product adding failed") ;
      }
  }

  onUpdate() {
    if (this.productObj.id !== 0) {
      this.productServ.updateProduct(this.productObj).subscribe(
        (res: any) => {
          alert('Product Updated');
          this.getAllProducts();
        },
        (error) => {
          console.error('Error updating product:', error);
          alert('Product update failed');
        }
      );
    } else {
      alert("Invalid product ID for update");
    }
  }

  onSaveCategory() {
    // Create a new category
    this.productServ.saveCategory({ name: this.productObj.category }).subscribe(
      (res: any) => {
        alert('Category Created');
        this.getAllCategory();
      },
      (error) => {
        console.error('Error creating category:', error);
        alert('Category creation failed');
      }
    );
  }

  

  onEdit(obj : any){
    this.productObj = obj ;
    this.openSidePanel() ;
  }

 

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
