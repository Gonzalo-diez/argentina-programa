import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sobremi } from '../Model/sobremi.model';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  URL = 'http://localhost:8080/sobreMi';

  constructor(private http: HttpClient) {}

  public traer(): Observable<sobremi[]> {
    return this.http.get<sobremi[]>(`${this.URL}/traer`)
  }

  public traerById(id: number): Observable<sobremi> {
    return this.http.get<sobremi>(`${this.URL}/traer/${id}`);
  }

  public guardar(sobremi: sobremi): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, sobremi);
  }

  public actualizar(id: number, sobremi: sobremi): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, sobremi);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
