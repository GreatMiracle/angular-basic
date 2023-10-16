import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VoteTakerComponent } from './votetaker.component';
import { VoterComponent } from './voter.component';
import { CountdownLocalVarParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownViewChildParentComponent } from './countdown-parent-view.component';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    AstronautComponent,
    MissionControlComponent,


  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
