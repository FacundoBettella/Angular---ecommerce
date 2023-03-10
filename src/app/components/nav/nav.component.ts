import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

import { User } from 'src/app/models/user.model';

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

   profile: User | null = null;

   constructor(
      private storeService: StoreService,
      private authService: AuthService
   ) {}

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

   login() {
      this.authService.loginAndGet({
         email: "john@mail.com",
         password: "changeme",
      })
      .subscribe((user) => {
         this.profile = user;
      });
   }

}
