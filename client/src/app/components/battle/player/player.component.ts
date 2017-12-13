import { Component, OnInit, Input } from '@angular/core';
import { BattleComponent } from '../battle.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  @Input() label;
  @Input() player;
  @Input() search;
  @Input() status;
  @Input() ready;
  
  constructor(private _bc: BattleComponent) { }

  ngOnInit() {
  }

  update(username, label){

    if(username === ''){
      this._bc.updateStatus(label, 'waiting');
      return;
    }
    
    let checkUser = () => {
      if(this.player.login === ''){
        this._bc.updateStatus(label, 'none');
      }
      else {
        this._bc.updateStatus(label, 'found');
      }
    }

    this._bc.updateStatus(label, 'searching');
    this.search.next(username);
    setTimeout(checkUser, 3000);
  }
  
  reset(label){
    this.status = 'waiting';
    this._bc.updateStatus(label, 'waiting');
  }

}
