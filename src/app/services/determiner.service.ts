import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Determiner} from 'src/app/models/determiner.model';

const baseUrl = 'http://localhost:4000/determiner';

@Injectable({
  providedIn: 'root'
})
export class DeterminerService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Determiner[]>{
    return this.http.get<Determiner[]>(baseUrl);
  }
  get(id: any): Observable<Determiner>{
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
