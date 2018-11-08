import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { FlickrTileComponent } from './flickr-tile/flickr-tile.component';
import { NgxPaginationModule  } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FlickrTileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
