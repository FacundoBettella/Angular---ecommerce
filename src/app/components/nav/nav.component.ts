import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
   private sub$!: Subscription;
   activeMenu = false;
   counter = 0;
   totalPrice = 0;

   constructor(private storeService: StoreService) {}

   ngOnInit(): void {
      this.storeService.myCart$.subscribe((products) => {
         this.counter = products.length;
      });

      this.storeService.myTotalPrice$.subscribe((price) => {
         this.totalPrice = price;
      });
   }

   ngOnDestroy(): void {
      this.sub$.unsubscribe();
   }

   toggleMenu() {
      this.activeMenu = !this.activeMenu;
   }
}
