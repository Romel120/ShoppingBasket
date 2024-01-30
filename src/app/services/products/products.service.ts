//produc.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) {}

  getAllProducts(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS) ;
  }

  saveProducts(obj : any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT , obj) ;
  }

  getAllCategories() {
    return this.http.get(Constant.API_END_POINT + 'categories');
  }

  saveCategory(category: any) {
    return this.http.post(Constant.API_END_POINT + 'categories', category);
  }

  updateProduct(obj: any) {
    return this.http.put(`${Constant.API_END_POINT}${Constant.METHODS.UPDATE_PRODUCT}/${obj.id}`, obj);
  }
  deleteProduct(productId: string) {
    // Implement the logic for deleting a product
  }
}
