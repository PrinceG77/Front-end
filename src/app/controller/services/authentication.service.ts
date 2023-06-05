import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user : User;
  private _users : Array <User>;

  public token : string;


  private apiUrl : string = "http://localhost:8072/api/v1/auth";
  authenticatedUser : any | undefined;
  public message: any;
  constructor(private http : HttpClient, private router : Router) { }


  get user(): User {
     if(this._user == null)
    {
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get users(): Array<User> {
    if(this._users == null)
    {
      this._users = new Array<User>();
    }
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }


  login(username: string, password: string) {
    const authRequest = { username, password };
    return this.http.post<any>(`${this.apiUrl}/token`, authRequest);

  }

  public authenticateUser(user : any) : Observable<boolean>{
    this.authenticatedUser = {username : user.username, roles : user.roles};
    localStorage.setItem("authUser", JSON.stringify({username : user.username, roles : user.roles, jwt : this.token}));
    return of(true);
  }

  public hasRole(role: any) : boolean{
    return this.authenticatedUser.roles.includes(role);
  }

  public isAuthenticated() : boolean{
    return this.authenticatedUser != undefined;
  }

  public logout() : Observable<boolean>{
    this.authenticatedUser = undefined;
    localStorage.removeItem('authUser');
    localStorage.removeItem('token');
    return of(true);
  }

  public loadAuthenticatedUserFromLocalStorage(){
    let token = localStorage.getItem("authUser");
    if(token){
      let user = JSON.parse(token);
      this.authenticatedUser = user;


      //console.log(this.authenticatedUser);
    }

  }


}
