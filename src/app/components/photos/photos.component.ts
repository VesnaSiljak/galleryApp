import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photos.model';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  allPhotos: Photo[];
  photosList: Photo[];
  albumId: string;
  searchText: string;
  loading: boolean;

  constructor(private photosService: PhotosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.searchText = '';
    this.photosList = [];
    this.albumId = this.route.snapshot.paramMap.get("id");

    this.photosService.getPhotos(this.albumId).subscribe(
      (data: Photo[]) => {
        this.allPhotos = data;
        for (let i = 0; i < this.allPhotos.length; i++) {
          if (Number(this.albumId) == this.allPhotos[i].albumId) {
            this.photosList.push(this.allPhotos[i]);
          }
        }
        this.loading = false;
      }
    )
  }

  removePhoto(id) {
    /* Instead API call based on photo id */
    for (let i = 0; i < this.photosList.length; i++) {
      if (id == this.photosList[i].id) {
        this.photosList.splice(i, 1);
      }
    }
  }

}
