import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   imageSearcher: string = '';

   imageSearcher2: string = '';

   isImg: boolean = true;

   onLoaded(img: string) {
      // console.log('Log padre=> ', img);
   }

   toggleImage() {
      this.isImg = !this.isImg;
   }
}
