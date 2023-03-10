import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

const routes: Routes = [
   {
      path: 'home',
      component: HomeComponent,
   },
   {
      path: 'category',
      component: CategoryComponent,
   },
   {
      path: 'my-cart',
      component: MycartComponent,
   },
   {
      path: 'login',
      component: LoginComponent,
   },
   {
      path: 'register',
      component: RegisterComponent,
   },
   {
      path: 'profile',
      component: ProfileComponent,
   },

   {
      path: 'not-found',
      component: NotFoundComponent,
   },
   
   {
      path: 'recovery-pass',
      component: RecoveryComponent,
   },

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
