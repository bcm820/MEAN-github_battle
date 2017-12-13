import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  list;
  
  constructor(private _ps: PlayerService) { }

  ngOnInit() {
    this.getRankings();
  }

  getRankings(){
    this._ps.list().subscribe(
      res => this.list = res,
      err => console.log(err)
    );
  }

}
