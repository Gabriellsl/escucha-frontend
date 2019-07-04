import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import { AppropriateComponent } from './pages/appropriate/appropriate.component';
import { InappropriateComponent } from './pages/inappropriate/inappropriate.component';
import { CostComponent } from './pages/cost/cost.component';
import { SubmitAudioComponent } from './pages/submit-audio/submit-audio.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    AppropriateComponent,
    InappropriateComponent,
    CostComponent,
    SubmitAudioComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
