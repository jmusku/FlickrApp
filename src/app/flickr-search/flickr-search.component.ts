import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-flickr-search',
  templateUrl: './flickr-search.component.html'
})
export class FlickrSearchComponent implements OnInit {

  isSearched: Boolean = false;

  constructor(private _flickrService: FlickrService) { }

  ngOnInit() {
  }

  getSearchResult(query: string) {
    return this._flickrService.getResult(query.toString());
  }

  searchFlickr(srchTxt: string) {
    setTimeout(() => {
      this.getSearchResult(srchTxt).subscribe(data => {
        this._flickrService.searchResultUpdate.emit(data);
      });
    }, 500);
  }

  clearSearch() {
    this._flickrService.searchResultUpdate.emit([]);
  }

  changeDisplayCount(cnt: number) {
    this._flickrService.displayCountUpdated.emit(cnt);
  }
}
