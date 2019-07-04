import { InappropriateComponent } from './pages/inappropriate/inappropriate.component';
import { AppropriateComponent } from './pages/appropriate/appropriate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostComponent } from './pages/cost/cost.component';
import { SubmitAudioComponent } from './pages/submit-audio/submit-audio.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: 'appropriate', component: AppropriateComponent},
  { path: 'inappropriate', component: InappropriateComponent},
  { path: 'cost', component: CostComponent},
  { path: '', component: SubmitAudioComponent},
  { path: 'submitAudio', component: SubmitAudioComponent},
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
