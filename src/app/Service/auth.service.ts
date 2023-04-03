import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../Model/JwtDto.model';
import { login } from '../Model/login.model';
import { nuevousuario } from '../Model/nuevousuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }

  public registrar(nuevoUsuario: nuevousuario): Observable<any> {
    return this.http.post<any>(this.URL + '/registro', nuevoUsuario);
  }

  public login(login: login): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.URL + '/login', login);
  }
}
