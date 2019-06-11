import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/users/"

  constructor( private http : HttpClient) { }

  getUser(id){
    return this.http.get(this.apiUrl + id);
  }
}
