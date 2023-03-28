import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inicio } from '../Model/inicio.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  URL = 'http://localhost:8080/inicio';

  constructor(private http: HttpClient) {}

  public traer(): Observable<inicio[]> {
    return this.http.get<inicio[]>(`${this.URL}/traer`)
  }

  public traerById(id: number): Observable<inicio> {
    return this.http.get<inicio>(`${this.URL}/traer/${id}`);
  }

  public guardar(inicio: inicio): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, inicio);
  }

  public actualizar(id: number, inicio: inicio): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, inicio);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
