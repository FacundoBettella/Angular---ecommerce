import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
   Product,
   createProductDTO,
   updateProductDTO,
} from '../models/product.model';

@Injectable({
   providedIn: 'root',
})
export class ProductsService {
   private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

   constructor(private httpClient: HttpClient) {}

   getAllProducts() {
      return this.httpClient.get<Product[]>(this.apiUrl);
   }

   getProductsByPage(limit: number, offset: number) {
      return this.httpClient.get<Product[]>(this.apiUrl, {
         params: { limit, offset },
      });
   }

   getProduct(id: string) {
      return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
   }

   create(dto: createProductDTO) {
      return this.httpClient.post<Product>(this.apiUrl, dto);
   }

   update(id: string | undefined, dto: updateProductDTO) {
      return this.httpClient.put<Product>(`${this.apiUrl}/${id}`, dto);
   }

   delete(id: string | undefined) {
      return this.httpClient.delete<boolean>(`${this.apiUrl}/${id}`);
   }
}

// Another practice API: return this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
