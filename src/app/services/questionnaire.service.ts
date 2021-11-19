import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import  {HttpClient} from '@angular/common/http'
import { Questionnaire } from '../models/questionnaires';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
myAppUrl:string;
myApiUrl:string;

  constructor(private http: HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Questionnaire';
  }
 saveQuestionnaire(questionnaire: Questionnaire): Observable<any>
 {
    return this.http.post(this.myAppUrl + this.myApiUrl, questionnaire);
 }
}
