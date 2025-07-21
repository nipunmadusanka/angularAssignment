import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusReadDto, StatusCreateUpdateDto } from '../models/status.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getAllStatuses(): Observable<StatusReadDto[]> {
    return this.http.get<StatusReadDto[]>(`${this.apiUrl}/Status/all`);
  }

  addStatus(status: StatusCreateUpdateDto): Observable<StatusReadDto> {
    return this.http.post<StatusReadDto>(`${this.apiUrl}/Status/add`, status);
  }

  updateStatus(id: number, status: StatusCreateUpdateDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/Status/update/${id}`, status);
  }

  deleteStatus(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Status/delete/${id}`);
  }
}
