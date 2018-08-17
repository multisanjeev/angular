import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { Http,RequestOptions,Response,Headers } from "@angular/http";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private http: Http
  ) {}

  getUsers(): Observable<User[]>{
    let headers = new Headers({ 'Authorization': 'Bearer' + this.authenticationService.token });
    let options = new RequestOptions({headers: headers});
    // get user from api
    return this.http.post(this.authenticationService.URL+'/user.php', options).map((response: Response) => response.json());
  }
  
}
