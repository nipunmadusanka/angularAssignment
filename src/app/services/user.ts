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
    return this.http.get<UserReadDto[]>(`${this.apiUrl}/user/all`);
  }

  getUserByEmail(email: string): Observable<UserReadDto> {
    return this.http.get<UserReadDto>(`${this.apiUrl}/user/by-email/${email}`);
  }

  addUser(user: UserCreateDto): Observable<UserReadDto> {
    return this.http.post<UserReadDto>(`${this.apiUrl}/user/add`, user);
  }

  updateUser(id: number, user: UserUpdateDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/update/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/delete/${id}`);
  }
}
