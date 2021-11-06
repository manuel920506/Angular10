import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 myAppUrl:string;
 myApiUrl:string;
 myCasoDUsoChangePassword:string;

  constructor(private http: HttpClient)
   { 
     this.myAppUrl = environment.endpoint;
     this.myApiUrl = '/api/User';
     this.myCasoDUsoChangePassword = '/ChangePassword';
   }

  saveUser(user: User): Observable<any>
  {
    //https://localhost:44320/api/User  --Post
    return this.http.post(this.myAppUrl + this.myApiUrl, user);
  }

  changePassword(changePassword):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + this.myCasoDUsoChangePassword, changePassword);
  }
}
