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

  public traer(id: number): Observable<inicio> {
    return this.http.get<inicio>(`${this.URL}/traer/${id}`)
  }
}
