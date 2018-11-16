import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-flickr-search',
  templateUrl: './flickr-search.component.html'
})
export class FlickrSearchComponent implements OnInit {

  displayCount = [5, 10, 30];
  searchTxtChanged: Subject<string> = new Subject<string>();

  constructor(private _flickrService: FlickrService) { }

  ngOnInit() {
    this.searchTxtChanged
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe(search => this.getSearchResult(search));
  }

  getSearchResult(query: string) {
    this._flickrService.getResult(query.toString()).subscribe(data => {
      this._flickrService.searchResultUpdate.next(data);
    });
  }

  searchFlickr(srchTxt: string) {
    this.searchTxtChanged.next(srchTxt);
  }

  clearSearch() {
    this._flickrService.searchResultUpdate.next([]);
  }

  changeDisplayCount(cnt: number) {
    this._flickrService.displayCountUpdated.next(cnt);
  }
}
