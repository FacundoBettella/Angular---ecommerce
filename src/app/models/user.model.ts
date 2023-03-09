export interface User {
   id: number;
   name: string;
   email: string;
   password: string;
}

export type CreateUserDTO = Omit<User, "id">
