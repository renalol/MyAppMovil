import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string): Observable<any> {
    // Aquí realizarías la petición al servidor para autenticar al usuario
    return this.http.post('/api/login', { usuario, contrasena });
  }
}