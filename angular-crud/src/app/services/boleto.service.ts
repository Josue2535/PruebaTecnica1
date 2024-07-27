import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boleto } from '../models/boleto.model';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private baseUrl = 'http://localhost:8080/api/boletos'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getBoletosByRifa(rifaId: number): Observable<Boleto[]> {
    return this.http.get<Boleto[]>(`${this.baseUrl}?rifaId=${rifaId}`);
  }

  getBoletoById(id: number): Observable<Boleto> {
    return this.http.get<Boleto>(`${this.baseUrl}/${id}`);
  }

  createBoleto(boleto: Boleto): Observable<Boleto> {
    return this.http.post<Boleto>(this.baseUrl, boleto);
  }

  updateBoleto(boleto: Boleto): Observable<Boleto> {
    return this.http.put<Boleto>(`${this.baseUrl}/${boleto.id}`, boleto);
  }

  deleteBoleto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
