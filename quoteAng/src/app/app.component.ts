import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  quote: any;
  quotes: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.quote = { author: "", quote: "" }
    this.getAll();
  }
  getAll() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.quotes = data;
      console.log(this.quotes);
    })
  }
  deleteQuote(id) {
    let observable = this._httpService.deleteQuote({id: id});
    console.log('Components ---> ', id);
    observable.subscribe(data => {
      this.quotes = data;
      console.log(this.quotes);
    })
  }
  voteUp(id) {
    let observable = this._httpService.voteUp({id: id});
    console.log('Components ---> ', id);
    observable.subscribe(data => {
      this.quotes = data;
      console.log(this.quotes);
    })
  }
  voteDown(id) {
    let observable = this._httpService.voteDown({id: id});
    console.log('Components ---> ', id);
    observable.subscribe(data => {
      this.quotes = data;
      console.log(this.quotes);
    })
  }
  createQuote() {
    let observable = this._httpService.createQuote(this.quote);
    observable.subscribe(data => {
      this.quotes = data;
    })
  }
}
