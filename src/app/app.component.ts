import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   respImg = '';

   imageSearcher = '';

   imageSearcher2 = '';

   isImg = true;

   constructor(
      private userService: UsersService,
      private fileService: FilesService
   ) {}

   onLoaded(img: string) {
      console.log('Log padre=> ', img);
   }

   toggleImage() {
      this.isImg = !this.isImg;
   }

   createUser() {
      this.userService
         .create({
            name: 'Arturo',
            email: 'Arturito@hotmail.com',
            password: 'admin123',
         })
         .subscribe((data) => {
            console.log('New user: ', data);
         });
   }

   downloadPDF() {
      this.fileService
         .getFile(
            'my-pdf',
            'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
            'application/pdf'
         )
         .subscribe((resp) => {
            alert(resp);
         });
   }

   onUpload(event: Event) {
      const element = event.target as HTMLInputElement;
      const file = element.files?.item(0);

      if (file) {
         this.fileService.uploadFile(file).subscribe((resp) => {
            this.respImg = resp.location;
            console.log(resp);
         });
      }
   }
}
