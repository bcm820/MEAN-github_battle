import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  
  player1;
  player2;
  tie = false;
  
  constructor(private _ps: PlayerService, private router: Router) {
    this.getPlayers();
  }

  ngOnInit() {
  }

  getPlayers(){
    let players = this._ps.players.getValue();
    [this.player1, this.player2] = players;
  }

  reset(){
    this._ps.players.next([]);
    this.router.navigate([''])
  }

}
