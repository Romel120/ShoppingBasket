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
    "id": "",
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

  onSave(){
    if (this.productObj.id === '') {
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
    if (this.productObj.id !== null) {
      console.log('Product ID before update:', this.productObj.id);
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

  onDelete(obj: any) {
    const isDelete = confirm("Do you want to delete this product?");
    if (isDelete) {
      this.productServ.deleteProduct(obj.id).subscribe(
        (res: any) => {
          alert('Product Deleted');
          this.getAllProducts();  // Assuming you want to refresh the product list after deletion
        },
        (error) => {
          console.error('Error deleting product:', error);
          alert('Product deletion failed');
        }
      );
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
