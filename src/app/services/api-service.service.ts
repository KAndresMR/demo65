import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'URL_DE_TU_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getUsers(): Observable<any[]> { // Define el método para obtener usuarios
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  // Puedes implementar otros métodos para interactuar con tu API aquí
}
