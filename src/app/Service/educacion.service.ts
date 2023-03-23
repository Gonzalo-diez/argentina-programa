import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../Model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion';

  constructor(private http: HttpClient) { }

  public traer(): Observable<educacion[]> {
    return this.http.get<educacion[]>(`${this.URL}/traer`);
  }

  public traerById(id: number): Observable<educacion> {
    return this.http.get<educacion>(`${this.URL}/traer/${id}`);
  }

  public guardar(educacion: educacion): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, educacion);
  }

  public actualizar(id: number, educacion: educacion): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, educacion);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
