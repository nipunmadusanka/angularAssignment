import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginDto } from '../models/user.model';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  login(credentials: UserLoginDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/Auth/login`, credentials).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('jwt_token', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    // Basic check: check if token exists. More robust validation (e.g., expiry) should ideally be done on backend or with a library.
    return !!token;
  }

  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload['role'] || null; // Assuming the role is stored in the 'role' claim
      } catch (e) {
        console.error('Error decoding JWT token:', e);
        return null;
      }
    }
    return null;
  }
}
