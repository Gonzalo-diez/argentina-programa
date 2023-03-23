import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesblandas } from '../Model/habilidadesblandas.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesblandasService {
  URL = 'http://localhost:8080/habilidadesBlandas';

  constructor(private http: HttpClient) { }

  public traer(): Observable<habilidadesblandas[]> {
    return this.http.get<habilidadesblandas[]>(`${this.URL}/traer`);
  }

  public traerById(id: number): Observable<habilidadesblandas> {
    return this.http.get<habilidadesblandas>(`${this.URL}/traer/${id}`);
  }

  public guardar(habilidadesblandas: habilidadesblandas): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, habilidadesblandas);
  }

  public actualizar(id: number, habilidadesblandas: habilidadesblandas): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, habilidadesblandas);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
