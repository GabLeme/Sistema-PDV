import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  readonly path = "/api/products";

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrlApis + this.path);
  }

  saveProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(environment.baseUrlApis + this.path, p);
  }

  updateProduct(p: Product): Observable<Product> {
    return this.http.put<Product>(environment.baseUrlApis + this.path + `/${p._id}`, p);
  }

  deleteProduct(p: Product) {
    return this.http.delete(environment.baseUrlApis + this.path + `/${p._id}`);
  }
}
