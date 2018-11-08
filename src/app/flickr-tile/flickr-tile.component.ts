import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flickr-tile',
  templateUrl: './flickr-tile.component.html'
})
export class FlickrTileComponent implements OnInit {
  @Input() flckrPhoto: {url: string, author: string};

  constructor() { }

  ngOnInit() {
  }

}
