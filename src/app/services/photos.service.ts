import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/albums/"
  constructor(private http:HttpClient) { }

  getPhotos(id){
    return this.http.get(this.apiUrl + id + "/photos");
  }
}
