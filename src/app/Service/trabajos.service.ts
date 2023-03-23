import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { trabajos } from '../Model/trabajos.model';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  URL = 'http://localhost:8080/trabajos'

  constructor(private http: HttpClient) { }

  public traer(): Observable<trabajos[]> {
    return this.http.get<trabajos[]>(`${this.URL}/traer`);
  }

  public traerById(id: number): Observable<trabajos> {
    return this.http.get<trabajos>(`${this.URL}/traer/${id}`);
  }

  public guardar(trabajos: trabajos): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, trabajos);
  }

  public actualizar(id: number, trabajos: trabajos): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, trabajos);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
