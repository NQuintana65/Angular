import {Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookmarkService {
    errorHandler = error => console.error('BookmarkService error', error);
    private baseUrl = 'https://angular2-course-7918e.firebaseio.com'

    constructor(private http: Http){
    }

    addbookmark(bookmark) {
        const json = JSON.stringify(bookmark);
        return this.http.post(`${this.baseUrl}/.json`, json)
        .toPromise()
        .catch(this.errorHandler);
      }

    getBookmarks() {
        return this.http.get(`${this.baseUrl}/.json`)
            .toPromise()
            .then(response => this.convert(response.json()))
            .catch(this.errorHandler);
    }
    
    removeBookmark(bookmark) {
        return this.http.delete(`${this.baseUrl}/${bookmark.id}.json`)
            .toPromise()
            .catch(this.errorHandler);
    }
    
    updatebookmark(bookmark) {
        const json = JSON.stringify({
            title: bookmark.title,
            url: bookmark.url
        });
        return this.http.patch(`${this.baseUrl}/${bookmark.id}.json`, json)
            .toPromise()
            .catch(this.errorHandler);
      }

    private convert(parsedResponse) {
        return Object.keys(parsedResponse)
            .map(id=> ({
                id: id,
                title: parsedResponse[id].title,
                url: parsedResponse[id].url            
            }))
            .sort((a,b) => a.title.localeCompare(b.title));
    }


}