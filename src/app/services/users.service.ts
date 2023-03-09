import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDTO, User } from '../models/user.model';

/*
   Angular reconoce automaticamente cuando es necesario utilizar environments.prod
   para utilizarlo (por eso importamos solo el ambiente de desarrollo).
*/
import { environment } from '../../../src/environments/environments';

@Injectable({
   providedIn: 'root',
})
export class UsersService {
   private apiUrl = `${environment.API_URL}/api/users`;

   constructor(private httpClient: HttpClient) {}

   create(dto: CreateUserDTO) {
      return this.httpClient.post<User>(this.apiUrl, dto);
   }

   getAll() {
      return this.httpClient.get<User[]>(this.apiUrl);
   }
}
