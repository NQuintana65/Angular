import { Component, EventEmitter, Output } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-list',
  templateUrl: 'album-list.component.html'
})
export class AlbumListComponent {
  @Output() albumSelect = new EventEmitter();

  albums;

  constructor(albumService: AlbumService) {
    this.albums = albumService.getAlbums();
  }

}
