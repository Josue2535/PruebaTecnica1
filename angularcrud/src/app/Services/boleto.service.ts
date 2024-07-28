import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface BoletoResponse {
  id: number;
  numero: number;
  rifaId: number;
  usuarioId: number;
}

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private apiUrl = 'http://localhost:9300/Boleto';
  private httpClient = inject(HttpClient);

  getBoletoLists(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/findAll`);
  }

  getBoleto(boletoId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${boletoId}`);
  }

  saveBoleto(boletoData: object): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/`, boletoData);
  }

  updateBoleto(boletoData: object, boletoId: number): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${boletoId}`, boletoData);
  }

  deleteBoleto(boletoId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${boletoId}`);
  }
}
