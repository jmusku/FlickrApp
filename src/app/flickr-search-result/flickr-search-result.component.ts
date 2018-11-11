import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/photo.model';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-flickr-search-result',
  templateUrl: './flickr-search-result.component.html'
})
export class FlickrSearchResultComponent implements OnInit {
  searchedPhotos: Photo[] = [];
  displayCount: Number = 2;

  page: any;

  constructor(private _flickrService: FlickrService) {
    this._flickrService.searchResultUpdate.subscribe((searchResult: Photo[]) => { this.searchedPhotos = searchResult; });
    this._flickrService.displayCountUpdated.subscribe((count: number) => { this.displayCount = count; });
  }

  ngOnInit() {
  }
}
