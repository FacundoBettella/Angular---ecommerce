import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.css'],
})
export class ProductComponent {
   @Input() product: Product = {
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

   @Output() addedProduct = new EventEmitter<Product>();
   @Output() showProduct = new EventEmitter<string>();

   onShowProductDetail() {
      this.showProduct.emit(this.product.id);
   }

   onAddToCart() {
      this.addedProduct.emit(this.product);
   }
}
