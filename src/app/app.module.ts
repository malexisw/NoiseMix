import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickersComponent } from './components/clickers/clickers.component';
import { FaIconLibrary,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCity, faCoffee, faBug, faFire, faTree, faCloudRain, faCloudSunRain, faTint, faWater, faBolt, faTrain, faFish, faWind, faBurn} from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ClickersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCity, faCoffee, faBug, faFire, faTree, faCloudRain, faCloudSunRain, faTint, faWater, faBolt, faTrain, faFish, faWind, faBurn)
  }
 }
