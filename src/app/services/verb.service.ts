import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Verb} from 'src/app/models/verb.model';

const baseUrl = 'http://localhost:4000/cverb';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Verb[]>{
    return this.http.get<Verb[]>(baseUrl);
  }
  get(id: any): Observable<Verb>{
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
