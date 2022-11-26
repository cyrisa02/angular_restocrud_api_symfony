import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Resto } from '../model/resto';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private baseUrl = 'https://apiresto.cyrisa02.fr/api/restaurants';

  list !: Resto[];
  public formData !: FormGroup;

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  //Add records 

  // create(payload: Resto): Observable<Resto> {
  // return this.http.post<Resto>("https://apiresto.cyrisa02.fr/api/restaurants", //payload);
  //  }

  create(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }

}
