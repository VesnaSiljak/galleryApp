import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/albums";

  constructor( private http: HttpClient ) { }

  getAlbums(){
    return this.http.get(this.apiUrl)
  }
}
