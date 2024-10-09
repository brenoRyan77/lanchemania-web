import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  private apiUrl = `${environment.apiUrl}/constantes`;

  constructor(private http: HttpClient) { }

  listarConstantes(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + "/categorias")
  }
}
