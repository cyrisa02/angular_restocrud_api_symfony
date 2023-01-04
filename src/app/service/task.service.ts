import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'https://apiresto.cyrisa02.fr/api/todos';

  list !: Todo[];
  public formData !: FormGroup;

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllTask(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  //Add records

  addTask(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }

  // Get records by Id

  getbyId(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://apiresto.cyrisa02.fr/api/todos/${id}`);
  }

  //update Records

  editTask(payload: Todo): Observable<Todo> {
    return this.http.put<Todo>(`https://apiresto.cyrisa02.fr/api/todos/${payload['id']}`, payload);
  }

  //Delete records
  deleteTask(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.baseUrl + '/' + todo['id']);
  }
}
