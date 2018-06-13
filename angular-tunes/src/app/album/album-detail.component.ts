import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl: 'album-detail.component.html'
})
export class AlbumDetailComponent {

  album;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit() {
    console.log('Album params:',this.route.params['_value']);
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.album = this.albumService.getAlbum(params['albumsId']);
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
