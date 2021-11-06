import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl:string;
  myApiUrl:string;

  constructor(private http: HttpClient)
  { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login';
  }

  login(user: User): Observable<any>
  {
    //https://localhost:44320/api/Login  --Post
    return this.http.post(this.myAppUrl + this.myApiUrl, user);
  }

  setLocalStorage(data):void
  {
    localStorage.setItem('userName', data);
  }

  removeLocalStorage():void
  {
    localStorage.removeItem('userName');
  }

  getUserName(): string
  {
    return localStorage.getItem('userName');
  }

}
