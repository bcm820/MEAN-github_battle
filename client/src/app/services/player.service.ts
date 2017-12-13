import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs/Observable';
import { BehaviorSubject } from 'Rxjs';
import { of } from 'Rxjs/observable/of';

@Injectable()
export class PlayerService {

  players = new BehaviorSubject([])
  
  constructor(private _http: HttpClient) { }

  timeSearch(username){
    return username
    .debounceTime(2000)
    .distinctUntilChanged()
    .switchMap(username => this.search(username));
  }

  search(username){
    return this._http.get(`https://api.github.com/users/${username}`);
    // GitHub API token removed
  }

  list(){
    return this._http.get('/api/list');
  }

  add(player){
    let players = this.players.getValue()
    players.push(player);
    this.players.next(players);
    return this._http.post('/api/add', player);
  }

}
