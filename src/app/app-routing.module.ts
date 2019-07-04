import { InappropriateComponent } from './pages/inappropriate/inappropriate.component';
import { AppropriateComponent } from './pages/appropriate/appropriate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostComponent } from './pages/cost/cost.component';
import { SubmitAudioComponent } from './pages/submit-audio/submit-audio.component';

const routes: Routes = [
  { path: 'appropriate', component: AppropriateComponent},
  { path: 'inappropriate', component: InappropriateComponent},
  { path: 'cost', component: CostComponent},
  { path: '', component: SubmitAudioComponent},
  { path: 'submitAudio', component: SubmitAudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
