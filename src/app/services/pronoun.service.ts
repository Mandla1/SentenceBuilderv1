import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pronoun} from 'src/app/models/pronoun.model';

const baseUrl = 'http://localhost:4000/pronoun';

@Injectable({
  providedIn: 'root'
})
export class PronounService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Pronoun[]>{
    return this.http.get<Pronoun[]>(baseUrl);
  }
  get(id: any): Observable<Pronoun>{
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
