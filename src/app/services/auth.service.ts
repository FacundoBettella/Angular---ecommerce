import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';

import { environment } from '../../../src/environments/environments';
import { Credentials, AccessToken } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private apiUrl = `${environment.API_URL}/api/auth`;

   constructor(
      private httpClient: HttpClient,
      private tokenService: TokenService
   ) {}

   login(login: Credentials) {
      return this.httpClient
         .post<AccessToken>(`${this.apiUrl}/login`, login)
         .pipe(tap((resp) => this.tokenService.saveToken(resp.access_token)));
   }

   getProfile() {
      /*
         El interceptor agrega el token
         let headers = new HttpHeaders();
         headers = headers.set('Authorization', `Bearer ${token}`);
         headers = headers.set('Content-type', 'application/json');
      */
      return this.httpClient.get<User>(`${this.apiUrl}/profile`);
   }

   loginAndGet(loginCredential: Credentials) {
      return this.login(loginCredential)
      .pipe(
         switchMap(() => this.getProfile())
      );
   }
}
