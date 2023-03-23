import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesduras } from '../Model/habilidadesduras.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesdurasService {
  URL = 'http://localhost:8080/habilidadesDuras';

  constructor(private http: HttpClient) { }

  public traer(): Observable<habilidadesduras[]> {
    return this.http.get<habilidadesduras[]>(`${this.URL}/traer`);
  }

  public traerById(id: number): Observable<habilidadesduras> {
    return this.http.get<habilidadesduras>(`${this.URL}/traer/${id}`);
  }

  public guardar(habilidadesduras: habilidadesduras): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, habilidadesduras);
  }

  public actualizar(id: number, habilidadesduras: habilidadesduras): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, habilidadesduras);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
