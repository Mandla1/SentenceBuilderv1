import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exclamation} from 'src/app/models/exclamation.model';

const baseUrl = 'http://localhost:4000/exclamation';

@Injectable({
  providedIn: 'root'
})
export class ExclamationService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Exclamation[]>{
    return this.http.get<Exclamation[]>(baseUrl);
  }
  get(id: any): Observable<Exclamation>{
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
