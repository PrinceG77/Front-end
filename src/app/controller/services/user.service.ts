import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8072/api/v1/user';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {

    return this.http.post(`${this.apiUrl}/add`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.delete(url);
  }

  getUserById(userId: number): Observable<User> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<User>(url);
  }

  updateUser(user: User, id : number): Observable<User> {
    console.log(user)
    const url = `${this.apiUrl}/user/${id}`;
    return this.http.put<User>(url, user);
  }

}
