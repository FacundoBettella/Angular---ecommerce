import { Component, Input, OnInit } from '@angular/core';
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

   totalPrice = 0;

   products: Product[] = [];

   productDetail: Product = {
      id: '',
      title: '',
      description: '',
      images: [],
      price: 0,
      category: {
         id: 0,
         name: '',
      },
   };

   showProductDetail = false;

   today = new Date();
   otherDay = new Date(2021, 2, 13);

   // Dependency Inyection
   constructor(
      private storeService: StoreService,
      private productService: ProductsService
   ) {
      this.myShoppingCart = this.storeService.getShoppingCart(); // No-async
   }

   ngOnInit(): void {
      this.productService.getAllProducts().subscribe((data) => {
         this.products = data;
      });
   }

   onAddToShoppingCart(product: Product) {
      this.storeService.addProduct(product);
      this.totalPrice = this.storeService.getTotal();
   }

   toggleProductDetail() {
      this.showProductDetail = !this.showProductDetail;
   }

   onShowDetail(id: string) {
      this.productService.getProduct(id).subscribe((data) => {
         this.productDetail = data;
      });
   }
}
