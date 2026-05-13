import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

// Usuarios de prueba
const DEMO_USERS: { [key: string]: { password: string; user: User } } = {
  admin: {
    password: 'admin123',
    user: {
      id: '1',
      username: 'admin',
      email: 'admin@quantaltda.com',
      name: 'Administrador QUANTA LTDA',
    },
  },
  'admin@quantaltda.com': {
    password: 'admin123*',
    user: {
      id: '4',
      username: 'admin@quantaltda.com',
      email: 'admin@quantaltda.com',
      name: 'Administrador QUANTA LTDA',
    },
  },
  demo: {
    password: 'demo123',
    user: {
      id: '2',
      username: 'demo',
      email: 'demo@quantaltda.com',
      name: 'Usuario Demo',
    },
  },
  analista: {
    password: 'analista123',
    user: {
      id: '3',
      username: 'analista',
      email: 'analista@quantaltda.com',
      name: 'Analista Financiero',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;
  private tokenKey = 'auth_token';
  private userKey = 'current_user';

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem(this.userKey);
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get isAuthenticated(): boolean {
    return !!this.currentUserValue && !!localStorage.getItem(this.tokenKey);
  }

  public get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    // Primero intenta con el backend real
    return this.http.post<LoginResponse>('/api/auth/login', credentials).pipe(
      switchMap((response) => {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.userKey, JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
        return of(response);
      }),
      switchMap(() => {
        // Si falla, intenta con usuarios de prueba (demo)
        return this.loginDemo(credentials);
      })
    );
  }

  private loginDemo(credentials: LoginRequest): Observable<LoginResponse> {
    // Simulamos validación de credenciales
    const demoUser = DEMO_USERS[credentials.username];

    if (!demoUser) {
      return throwError(() => ({
        error: {
          message: 'Usuario no encontrado. Usuarios de prueba: admin, demo, analista',
        },
      }));
    }

    if (demoUser.password !== credentials.password) {
      return throwError(() => ({
        error: {
          message: 'Contraseña incorrecta',
        },
      }));
    }

    // Simulamos una llamada al servidor con delay
    const response: LoginResponse = {
      token: 'demo-token-' + Math.random().toString(36).substr(2, 9),
      user: demoUser.user,
    };

    return of(response).pipe(
      delay(800),
      map((resp) => {
        localStorage.setItem(this.tokenKey, resp.token);
        localStorage.setItem(this.userKey, JSON.stringify(resp.user));
        this.currentUserSubject.next(resp.user);
        return resp;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.next(null);
  }
}
