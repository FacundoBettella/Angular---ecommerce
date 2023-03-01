import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

   @Input() product: Product = {
      id: "",
      title: "",
      description: "",
      image: "",
      price: 0,
      category: "",
   }

   @Output() addedProduct = new EventEmitter<Product>();


   onAddToCart(){
      this.addedProduct.emit(this.product)
   }

}
