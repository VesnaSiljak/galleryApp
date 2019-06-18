import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  deletedItems = [];

  constructor() { }

  getItems(id) {
    let listPhotos = [];
    for (let i = 0; i < this.deletedItems.length; i++) {
      if (id == this.deletedItems[i].id) {
        listPhotos = this.deletedItems[i].deletedPhotos;
      }
    }
    return listPhotos;
  }

  addDeletedItem(albumId, itemId) {
    let objExist = false;
    for (let i = 0; i < this.deletedItems.length; i++) {
      if (albumId == this.deletedItems[i].id) {
        this.deletedItems[i].deletedPhotos.push(itemId);
        objExist = true;
      }
    }
    if (!objExist) {
      this.deletedItems.push({ id: albumId, deletedPhotos: [itemId] });
    }
  }
}
