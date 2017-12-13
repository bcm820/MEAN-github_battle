import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BattleComponent } from './components/battle/battle.component';
import { PlayerComponent } from './components/battle/player/player.component';
import { ResultsComponent } from './components/battle/results/results.component';
import { RankingsComponent } from './components/rankings/rankings.component';

import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ResultsComponent,
    RankingsComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
