import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container" [ngSwitch]="state">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { 

  state = 'artist-list';
  selectedArtistId;
  selectedAlbumId;

  showArtistDetail(artistId) {
    this.selectedArtistId = artistId;
    this.state = 'artist-detail';
  }
  
  showAlbumDetail(albumId) {
    this.selectedAlbumId = albumId;
    this.state = 'album-detail';
  }
}
