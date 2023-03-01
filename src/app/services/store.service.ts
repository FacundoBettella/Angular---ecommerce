import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
   providedIn: 'root',
})
export class StoreService {
   myShoppingCart: Product[] = [];

   totalPrice: number = 0;

   constructor() {}

   addProduct(product: Product) {
      this.myShoppingCart.push(product);
   }

   getShoppingCart() {
      return this.myShoppingCart;
   }

   getTotal() {
      return (this.totalPrice = this.myShoppingCart.reduce(
         (acc, product) => acc + product.price,
         0
      ));
   }

}
