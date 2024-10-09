import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Cardapio } from '../models/cardapio';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private apiUrl = `${environment.apiUrl}/cardapio`;

  constructor(private http: HttpClient) { }

  listarCardapio(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(this.apiUrl);
  }
}
