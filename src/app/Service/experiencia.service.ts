import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../Model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/experiencia';

  constructor(private http: HttpClient) { }

  public traer(): Observable<experiencia[]> {
    return this.http.get<experiencia[]>(`${this.URL}/traer`);
  }

  public traerById(id: number): Observable<experiencia> {
    return this.http.get<experiencia>(`${this.URL}/traer/${id}`);
  }

  public guardar(experiencia: experiencia): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, experiencia);
  }

  public actualizar(id: number, experiencia: experiencia): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
