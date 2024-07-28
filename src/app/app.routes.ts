import { Routes } from '@angular/router';
import { SignInComponent } from './Auth/login/sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { authGuard, loginGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: SignInComponent,
    canActivate:[loginGuard]
  },
];
