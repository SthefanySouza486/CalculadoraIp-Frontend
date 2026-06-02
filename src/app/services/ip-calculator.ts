import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpCalculator {
  private apiUrl = 'http://localhost:8080/api/calculadora/calcular'; 

  constructor(private http:HttpClient) { }

  calcularRede(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados); 
  }
}
