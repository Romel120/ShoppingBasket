//produc.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

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

  getProductsByCategory(id: any): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY + id);
  }


  getAllCategories() {
    return this.http.get(Constant.API_END_POINT + 'categories');
  }

  saveCategory(category: any) {
    return this.http.post(Constant.API_END_POINT + 'categories', category);
  }

  updateProduct(obj: any) {
    return this.http.put(`${Constant.API_END_POINT}${Constant.METHODS.UPDATE_PRODUCT_BY_ID}/${obj.id}`, obj);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.DELETE_PRODUCT_BY_ID}/${productId}`);
  }
  
}
