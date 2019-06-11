import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/albums.model';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumList: Album[];
  imgUrl: string;
  loading:boolean;
  constructor(private albumService: AlbumsService, private usersService: UsersService) { }

  ngOnInit() {
    this.loading=true;
    this.imgUrl = "https://via.placeholder.com/600x350/24f355"
    this.albumService.getAlbums().subscribe(
      (data: Album[]) => {
        this.albumList = data;
        this.loading=false;

        for (let i = 0; i < this.albumList.length; i++) {
          this.usersService.getUser(this.albumList[i].userId).subscribe(
            (data: User) => {
              this.albumList[i].name = data.name;
            }
          )
        }
      }
    )

  }


}
