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

  public traer(id: number): Observable<sobremi> {
    return this.http.get<sobremi>(`${this.URL}/traer/${id}`)
  }
}
