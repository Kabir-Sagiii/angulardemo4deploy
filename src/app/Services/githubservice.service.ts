import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  constructor(private http:HttpClient) { }

  getUserData(username:string):any {
    return  this.http.get(`https://api.github.com/users/${username}`)
  }
}
