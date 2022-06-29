import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adverb} from 'src/app/models/adverb.model';

const baseUrl = 'http://localhost:4000/adverb';

@Injectable({
  providedIn: 'root'
})
export class AdverbService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Adverb[]>{
    return this.http.get<Adverb[]>(baseUrl);
  }
  get(id: any): Observable<Adverb>{
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
