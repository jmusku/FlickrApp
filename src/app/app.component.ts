import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlickrService } from './services/flickr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlickrService]
})
export class AppComponent implements OnInit {
  title = 'Flickr Application';
  page: any;

  constructor() {
  }

  ngOnInit() {
  }
}
