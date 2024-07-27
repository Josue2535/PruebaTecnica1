import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rifa } from '../models/rifa.model';

@Injectable({
  providedIn: 'root'
})
export class RifaService {
  private baseUrl = 'http://localhost:8080/api/rifas';

  constructor(private http: HttpClient) {}

  getRifas(): Observable<Rifa[]> {
    return this.http.get<Rifa[]>(this.baseUrl);
  }

  getRifaById(id: number): Observable<Rifa> {
    return this.http.get<Rifa>(`${this.baseUrl}/${id}`);
  }

  createRifa(rifa: Rifa): Observable<Rifa> {
    return this.http.post<Rifa>(this.baseUrl, rifa);
  }

  updateRifa(rifa: Rifa): Observable<Rifa> {
    return this.http.put<Rifa>(`${this.baseUrl}/${rifa.id}`, rifa);
  }

  deleteRifa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
