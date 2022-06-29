import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conjunction} from 'src/app/models/conjunction.model';

const baseUrl = 'http://localhost:4000/conjunction';

@Injectable({
  providedIn: 'root'
})
export class ConjuctionService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Conjunction[]>{
    return this.http.get<Conjunction[]>(baseUrl);
  }
  get(id: any): Observable<Conjunction>{
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
