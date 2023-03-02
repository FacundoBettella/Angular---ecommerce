import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   imageSearcher = '';

   imageSearcher2= '';

   isImg= true;

   onLoaded(img: string) {
      console.log('Log padre=> ', img);
   }

   toggleImage() {
      this.isImg = !this.isImg;
   }
}
