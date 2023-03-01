import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
   myShoppingCart: Product[] = [];
   totalPrice: number = 0;

   products: Product[] = [];

   today = new Date();
   otherDay = new Date(2021, 2, 13);

   // Dependency Inyection
   constructor(
      private storeService: StoreService,
      private productService: ProductsService
   ) {
      this.myShoppingCart = this.storeService.getShoppingCart(); // No-async
   }

   onAddToShoppingCart(product: Product) {
      this.storeService.addProduct(product);
      this.totalPrice = this.storeService.getTotal();
   }

   ngOnInit(): void {
      this.productService.getAllProducts().subscribe((data) => {
         this.products = data;
      });
   }
}
