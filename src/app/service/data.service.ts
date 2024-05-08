import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../common/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient){}

  getProducto(): Observable<Productos>{
    return this.http.get<Productos>('../assets/json/productos.json')
  }
}
