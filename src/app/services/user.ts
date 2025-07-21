import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReadDto, UserCreateDto, UserUpdateDto } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getUsers(): Observable<UserReadDto[]> {
    return this.http.get<UserReadDto[]>(`${this.apiUrl}/User/all`);
  }

  getUserByEmail(email: string): Observable<UserReadDto> {
    return this.http.get<UserReadDto>(`${this.apiUrl}/User/by-email/${email}`);
  }

  addUser(user: UserCreateDto): Observable<UserReadDto> {
    return this.http.post<UserReadDto>(`${this.apiUrl}/User/add`, user);
  }

  updateUser(id: number, user: UserUpdateDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/User/update/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/User/delete/${id}`);
  }
}
