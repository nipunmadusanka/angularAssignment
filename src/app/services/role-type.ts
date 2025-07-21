import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleTypeReadDto, RoleTypeCreateUpdateDto } from '../models/role-type.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleTypeService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getAllRoles(): Observable<RoleTypeReadDto[]> {
    return this.http.get<RoleTypeReadDto[]>(`${this.apiUrl}/roletype/all`);
  }

  addRole(roleType: RoleTypeCreateUpdateDto): Observable<RoleTypeReadDto> {
    return this.http.post<RoleTypeReadDto>(`${this.apiUrl}/roletype/add`, roleType);
  }

  updateRole(id: number, roleType: RoleTypeCreateUpdateDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/roletype/update/${id}`, roleType);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/roletype/delete/${id}`);
  }
}
