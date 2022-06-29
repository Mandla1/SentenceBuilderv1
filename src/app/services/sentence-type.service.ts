import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Types} from '../models/types.model';
const baseUrl = 'http://localhost:4000/type';
@Injectable({
  providedIn: 'root'
})
export class SentenceTypeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Types[]>{
    return this.http.get<Types[]>(baseUrl);
  }
  get(id: any): Observable<Types>{
    return this.http.get('${baseUrl}/${id}');
  }
  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any>{
    return this.http.put('${baseUrl}/${id}', data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete('${baseUrl}/${id}');
  }
}
