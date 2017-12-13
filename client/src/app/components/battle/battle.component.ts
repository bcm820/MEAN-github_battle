import { Component, OnInit } from '@angular/core';
import { Subject } from 'Rxjs';

import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent {

  label = ['Player 1', 'Player 2']
  player = [new Player(), new Player()]
  status1 = 'waiting';
  status2 = 'waiting';
  search1 = new Subject();
  search2 = new Subject();
  ready = false;
  battle = false;

  constructor(private _ps: PlayerService, private router: Router){
    this.findUser(this.search1, 0);
    this.findUser(this.search2, 1);
  }
  
  findUser(username, i){
    this._ps.timeSearch(username).subscribe(
      player => this.player[i] = player,
      err => console.log('No user found!')
    );
  }

  updateStatus(player, status){
    if(player === 'Player 1'){ this.status1 = status; }
    else if(player === 'Player 2'){ this.status2 = status; }
    this.checkReady()
  }

  checkReady(){
    if(this.status1 === 'found' && this.status2 === 'found'){
        this.ready = true;
    } else {
      this.ready = false;
    }
  }

  runBattle(){
    for(let i = 0; i < 2; i++){
      let player = {
        id: this.player[i].id,
        login: this.player[i].login,
        name: this.player[i].name,
        avatar_url: this.player[i].avatar_url,
        html_url: this.player[i].html_url,
        public_repos: this.player[i].public_repos,
        followers: this.player[i].followers,
        score: (this.player[i].public_repos + this.player[i].followers) * 12
      }
      this._ps.add(player).subscribe(
        res => console.log(`${this.player[i].login} added to DB`),
        err => console.log(`${this.player[i].login} not added (prob in alrdy)`)
      )
    }
    this.router.navigate(['results']);
  }

}
