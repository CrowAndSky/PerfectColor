import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { RoomSceneComponent }   from './room-scene.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RoomSceneComponent ],
  bootstrap:    [ AppComponent, RoomSceneComponent ]
})

export class AppModule { }
