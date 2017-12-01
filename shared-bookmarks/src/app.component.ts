import { Component } from '@angular/core';
import { BookmarkService } from  './bookmark.service';
import { BookmarkListComponent } from  './bookmark-list.component';
import { BookmarkEditComponent } from  './bookmark-edit.component';

@Component({
  selector: 'bookmark-app',
  template: `
    <bookmark-edit [bookmark]="editableBookmark"
    (save)="save($event)" (clear)="clear()"></bookmark-edit>
    <bookmark-list [bookmarks]="bookmarks"
    (edit)="edit($event)"
    (remove)="remove($event)"></bookmark-list>
  `,
})
export class AppComponent {

  bookmarks = [];
  editableBookmark = {};

   constructor(private bookmarkService: BookmarkService){
      this.bookmarkService.errorHandler = error =>
        window.alert('Oops! The server request failed.');
      this.reload();
  }

  clear() {
    this.editableBookmark = {};
  }

  edit(bookmark) {
    this.editableBookmark = Object.assign({}, bookmark);
  }

  remove(bookmark) {
    this.bookmarkService.removeBookmark(bookmark)
      .then (() => this.reload());
  }
  
  save(bookmark) {
    if (bookmark.id) {
      console.info('updating');
      this.bookmarkService.updatebookmark(bookmark)
        .then(()=> this.reload());
    } else {
      console.info('inserting');
      this.bookmarkService.addbookmark(bookmark)
        .then(()=> this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks);
  }
}
