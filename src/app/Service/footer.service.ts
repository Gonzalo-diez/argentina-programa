import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { footer } from '../Model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  URL = 'http://localhost:8080/footer';

  constructor(private http: HttpClient) {}

  public traer(): Observable<footer[]> {
    return this.http.get<footer[]>(this.URL + '/traer')
  }

  public traerById(id: number): Observable<footer> {
    return this.http.get<footer>(`${this.URL}/traer/${id}`);
  }

  /*public guardar(footer: footer): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, footer);
  }*/

  public actualizar(id: number, footer: footer): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, footer);
  }

  /*public borrar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }*/
}
