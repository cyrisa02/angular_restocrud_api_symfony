import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, EMPTY } from 'rxjs';
import { Resto } from '../model/resto';
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private baseUrl = 'https://apiresto.cyrisa02.fr/api/restaurants';

  list !: Resto[];
  public formData !: FormGroup;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

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


  //https://github.com/cod3rcursos/angular-crud/blob/master/frontend/src/app/components/product/product.service.ts

  create45(resto: Resto): Observable<Resto> {
    return this.http.post<Resto>(this.baseUrl, resto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Erreur!", true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  // Fin
}
