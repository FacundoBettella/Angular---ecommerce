import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class TokenService {
   saveToken(token: string) {
      sessionStorage.setItem('access_token', token);
   }

   getToken() {
      const token = sessionStorage.getItem('access_token');
      return token;
   }
}
