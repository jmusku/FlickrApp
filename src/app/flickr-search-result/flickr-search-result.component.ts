import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Photo } from '../models/photo.model';
import { FlickrService } from '../services/flickr.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flickr-search-result',
  templateUrl: './flickr-search-result.component.html'
})
export class FlickrSearchResultComponent implements OnInit, OnDestroy {
  searchResultSubscription: Subscription;
  displayCountSubscription: Subscription;
  searchedPhotos: Photo[] = [];
  displayCount: Number = 5;

  page: any;

  constructor(private _flickrService: FlickrService) {
  }

  ngOnInit() {
    this.searchResultSubscription = this._flickrService.searchResultUpdate.subscribe((searchResult: Photo[]) => {
      this.searchedPhotos = searchResult;
    });
    this.displayCountSubscription = this._flickrService.displayCountUpdated.subscribe((count: number) => {
      this.displayCount = count;
    });
  }

  ngOnDestroy() {
    this.searchResultSubscription.unsubscribe();
    this.displayCountSubscription.unsubscribe();
  }
}
