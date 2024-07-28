import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServicesService } from './services/auth-services.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthServicesService);
  const router = inject(Router);
  if (auth.isSignedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthServicesService);
  const router = inject(Router);

  if (!auth.isSignedIn()) {
    return true;
  } else {
    router.navigate(['home']);
    return false;
  }
};
