import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface RifaResponse {
  id: number;
  nombre: string;
  descripcion: string;
  fechaCreacion: Date;
  fechaFinalizacion: Date;
}

@Injectable({
  providedIn: 'root'
})

export class RifaService {
  private apiUrl = 'http://localhost:9300/rifa';
  private httpClient = inject(HttpClient);

  saveRifa(rifaData: object): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/`, rifaData);
  }

  getRifaList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/findAll`);
  }

  getRifa(rifaId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${rifaId}`);
  }

  updateRifa(rifaData: object, rifaId: string): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${rifaId}`, rifaData);
  }
  deleteRifa(rifaId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${rifaId}`);
  }
}
