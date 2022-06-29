import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Sentence } from '../models/sentence.model';
const baseUrl = 'http://localhost:4000/sentence';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Sentence[]>{
    return this.http.get<Sentence[]>(baseUrl);
  }
  get(id: any): Observable<Sentence>{
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
