import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  private apiUrl = `${environment.apiUrl}/produtos`;

  constructor(private http: HttpClient) { }
}
