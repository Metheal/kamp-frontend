import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44377/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }

  getProductsByCategory(categoryID: number): Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "products/getallbycategory?categoryID=" + categoryID;
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }
}
