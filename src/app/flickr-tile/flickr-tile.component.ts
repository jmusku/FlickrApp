import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-flickr-tile',
  templateUrl: './flickr-tile.component.html'
})
export class FlickrTileComponent implements OnInit {
  @Input() flckrPhoto: Photo;

  constructor() { }

  ngOnInit() {
  }

}
