import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FlickrService } from './services/flickr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlickrService]
})
export class AppComponent implements OnInit {
  displaycount: Number = 2;
  isSearched: Boolean = false;
  searchTxt: String = '';
  photos = [];

  constructor(private _flickrService: FlickrService) {
  }

  ngOnInit() {
  }

  getSearchResult() {
    this.isSearched = this.searchTxt === '' ? false : true;
    return this._flickrService.getResult(this.searchTxt.toString());
  }

  searchFlickr() {
    this.getSearchResult().subscribe(data => {
      this.photos = data;
    });
  }

  clearSearch() {
    this.isSearched = false;
    this.searchTxt = '';
    this.photos = [];
    this.displaycount = 2;
  }
}
