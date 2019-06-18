import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) { }

  getPhotos(id) {
    return this.http.get(this.apiUrl + id + '/photos');
  }

  deletePhoto(id) {
    this.http.delete(id);
  }
}
