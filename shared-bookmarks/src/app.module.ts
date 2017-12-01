import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BookmarkService } from  './bookmark.service';
import { BookmarkListComponent } from './bookmark-list.component';
import { BookmarkEditComponent } from './bookmark-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, BookmarkListComponent, BookmarkEditComponent],
  bootstrap: [AppComponent],
  providers: [BookmarkService]
})
export class AppModule { }
