import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noun} from '../models/noun.model';

const baseUrl = 'http://localhost:4000/cnoun';

@Injectable({
  providedIn: 'root'
})
export class NounService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Noun[]>{
    return this.http.get<Noun[]>(baseUrl);
  }
  get(id: any): Observable<Noun>{
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
