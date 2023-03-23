import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { curriculum } from '../Model/curriculum.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  URL = 'http://localhost:8080/curriculum';

  constructor(private http: HttpClient) {}

  public traer(): Observable<curriculum[]> {
    return this.http.get<curriculum[]>(`${this.URL}/traer`)
  }

  public traerById(id: number): Observable<curriculum> {
    return this.http.get<curriculum>(`${this.URL}/traer/${id}`);
  }

  public guardar(curriculum: curriculum): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, curriculum);
  }

  public actualizar(id: number, curriculum: curriculum): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, curriculum);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
