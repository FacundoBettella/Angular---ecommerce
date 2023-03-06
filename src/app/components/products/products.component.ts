import { Component, OnInit } from '@angular/core';
import {
   Product,
   createProductDTO,
   updateProductDTO,
} from 'src/app/models/product.model';
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
   statusDetail = '';

   limit = 10;
   offset = 0;

   today = new Date();
   // otherDay = new Date(2021, 2, 13);

   // Dependency Inyection
   constructor(
      private storeService: StoreService,
      private productService: ProductsService
   ) {
      this.myShoppingCart = this.storeService.getShoppingCart(); // No-async
   }

   ngOnInit(): void {
      // this.productService.getAllProducts().subscribe((data) => {
      //    this.products = data;
      // });
      this.loadMore();
   }

   onAddToShoppingCart(product: Product) {
      this.storeService.addProduct(product);
      this.totalPrice = this.storeService.getTotal();
   }

   toggleProductDetail() {
      this.showProductDetail = !this.showProductDetail;
   }

   onShowDetail(id: string) {
      this.toggleProductDetail();
      this.statusDetail = 'loading';
      this.productService.getProduct(id).subscribe({
         next: (data) => {

            this.statusDetail = '';
            this.productDetail = data;
         },
         error: (error) => {
            console.error(error.message);
            this.statusDetail = 'Product not found';
         },
      });
   }

   createNewProduct() {
      const newProduct: createProductDTO = {
         title: 'PS%',
         description: 'Sony power',
         images: [''],
         price: 235000,
         categoryId: 2,
      };

      this.productService.create(newProduct).subscribe((res) => {
         console.log('Created', res);
         this.products.unshift(res);
      });
   }

   updateProduct() {
      const id = this.productDetail.id;

      const updateProduct: updateProductDTO = {
         title: 'PS5 TLOU Edition',
         description: 'QUIERO UNA PC MASTER RACE',
         price: 199999.99,
      };

      this.productService.update(id, updateProduct).subscribe((res) => {
         const productIndex = this.products.findIndex(
            (product) => product.id === res.id
         );

         this.products[productIndex] = res;

         console.log('updated => ', this.products[productIndex]);
      });
   }

   deleteProduct() {
      const id = 'this.productDetail.id';

      this.productService.delete(id).subscribe(() => {
         this.products = this.products.filter((product) => product.id !== id);
         this.toggleProductDetail();
      });
   }

   loadMore() {
      this.productService
         .getProductsByPage(this.limit, this.offset)
         .subscribe((data) => {
            this.products = this.products.concat(data);
            this.offset += this.limit;
         });
   }
}
