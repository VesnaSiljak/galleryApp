import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photos.model';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

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
  deletedPhotos: any[];
  isGrid: boolean;

  constructor(private photosService: PhotosService, private route: ActivatedRoute, private communicatonService: CommunicationService) { }

  ngOnInit() {
    this.isGrid = false;
    this.loading = true;
    this.searchText = '';
    this.photosList = [];
    this.albumId = this.route.snapshot.paramMap.get('id');

    this.deletedPhotos = this.communicatonService.getItems(this.albumId);

    this.photosService.getPhotos(this.albumId).subscribe(
      (data: Photo[]) => {
        this.allPhotos = data;
        for (let i = 0; i < this.allPhotos.length; i++) {
          if (Number(this.albumId) == this.allPhotos[i].albumId) {
            let isDeleted = false;
            for (let j = 0; j < this.deletedPhotos.length; j++) {
              if (this.deletedPhotos[j] == this.allPhotos[i].id) {
                isDeleted = true;
              }
            }
            if (!isDeleted) {
              this.photosList.push(this.allPhotos[i]);
            }
          }
        }
        this.loading = false;
      }
    );
  }

  removePhoto(id) {
    /* Instead API call based on photo id */

    for (let i = 0; i < this.photosList.length; i++) {
      if (id == this.photosList[i].id) {
        this.photosList.splice(i, 1);
      }
    }
    this.communicatonService.addDeletedItem(this.albumId, id);

    console.log(`
    this.photosService.deletePhoto(id);
    `);
  }

}
