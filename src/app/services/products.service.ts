import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
   Product,
   createProductDTO,
   updateProductDTO,
} from '../models/product.model';
import { checkTime } from 'src/app/interceptors/time.interceptor';

/*
   Angular reconoce automaticamente cuando es necesario utilizar environments.prod
   para utilizarlo (por eso importamos solo el ambiente de desarrollo).
*/
import { environment } from '../../../src/environments/environments';

@Injectable({
   providedIn: 'root',
})
export class ProductsService {
   // proxy.config.json => Para cambiar el orgin path que recibe la API y evitar problemas de cors en modo development; asi se evita que la petición salga de localhost.

   private apiUrl = `${environment.API_URL}/api/products`;
   // Hay un proxy de desarrollo para evitar problemas de CORS

   constructor(private httpClient: HttpClient) {}

   getAllProducts() {
      return this.httpClient.get<Product[]>(this.apiUrl);
   }

   getProductsByPage(limit: number, offset: number) {
      return this.httpClient.get<Product[]>(this.apiUrl, {
         params: { limit, offset },
         context: checkTime()
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
