import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  public token: string;

  public URL = "http://localhost:8080/api";

  constructor( private http: Http ) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

  login( username: string, password: string): Observable<boolean>{
    return this.http.post(this.URL + '/authenticate.php', JSON.stringify({username: username, password: password}))
    .map((response: Response) => {
      let token = response.json() && response.json().token;
      if(token) {
        // set token property
        this.token = token;
        //store user and jwt token localstorage to keep user logged in between page refreshed
        localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
        // return true to indicate login successfully
        return true;
      } else {
        // return false to indicate login failed
        return false;
      }
    });
  }

  logout() : void{
    // clear token remove user from local storage to user logout
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
