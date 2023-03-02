import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
   providedIn: 'root',
})
export class StoreService {
   private myShoppingCart: Product[] = [];
   private myCart = new BehaviorSubject<Product[]>([]);
   public myCart$ = this.myCart.asObservable();

   private myTotalPrice = new BehaviorSubject<number>(0);
   public myTotalPrice$ = this.myTotalPrice.asObservable();

   totalPrice = 0;

   addProduct(product: Product) {
      this.myShoppingCart.push(product);
      this.myCart.next(this.myShoppingCart);
   }

   getShoppingCart() {
      return this.myShoppingCart;
   }

   getTotal() {
      this.totalPrice = this.myShoppingCart.reduce(
         (acc, product) => acc + product.price,
         0
      );

      this.myTotalPrice.next(this.totalPrice);

      return this.totalPrice;
   }
}
