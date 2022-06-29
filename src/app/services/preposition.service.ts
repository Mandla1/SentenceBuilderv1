import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preposition} from 'src/app/models/preposition.model';

const baseUrl = 'http://localhost:4000/preposition';

@Injectable({
  providedIn: 'root'
})
export class PrepositionService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Preposition[]>{
    return this.http.get<Preposition[]>(baseUrl);
  }
  get(id: any): Observable<Preposition>{
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
