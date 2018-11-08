import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FlickrTileComponent } from './flickr-tile/flickr-tile.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Flickr Application'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flickr Application');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Flickr Application!');
  });
});
