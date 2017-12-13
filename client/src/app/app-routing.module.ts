import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './components/battle/battle.component';
import { ResultsComponent } from './components/battle/results/results.component';
import { RankingsComponent } from './components/rankings/rankings.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: BattleComponent},
  {path:'results', component: ResultsComponent},
  {path:'rankings', component: RankingsComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
