import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Adjective} from 'src/app/models/adjective.model';

const baseUrl = 'http://localhost:4000/adjective';

@Injectable({
  providedIn: 'root'
})
export class AdjectiveService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Adjective[]>{
    return this.http.get<Adjective[]>(baseUrl);
  }
  get(id: any): Observable<Adjective>{
    return this.http.get('${baseUrl}/${id}');
  }
  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any>{
    return this.http.put('${baseUrl}/${id}',data);
  }
  delete(id: any): Observable<any>{
    return this.http.delete(baseUrl);
  }
}
