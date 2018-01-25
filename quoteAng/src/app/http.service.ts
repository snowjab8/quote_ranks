import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll() {
    return this._http.get('/quotes');
  }
  createQuote(data) {
    console.log('Service route hit- CreateQuote');
    return this._http.post('/quotes', data);
  }
  deleteQuote(id) {
    console.log('Service ---> ', id.id);
    console.log('Delete quote at service hit');
    return this._http.delete('/quotes/' + id.id);
  }
  voteUp(id) {
    return this._http.get('/quotes/upvote/' + id.id);
  }
  voteDown(id) {
    return this._http.get('/quotes/downvote/' + id.id);
  }

}
