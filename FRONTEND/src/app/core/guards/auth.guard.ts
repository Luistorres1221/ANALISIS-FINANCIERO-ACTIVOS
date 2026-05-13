import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isAuthenticated) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
