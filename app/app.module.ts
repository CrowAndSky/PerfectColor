import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomSceneComponent } from './room-scene.component';
import { RoomSceneZoomComponent } from './room-scene-zoom.component';
import { ColorListService } from './color-list.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RoomSceneComponent, RoomSceneZoomComponent ],
  bootstrap:    [ AppComponent, RoomSceneComponent, RoomSceneZoomComponent ],
  providers:    [ ColorListService ]
})

export class AppModule { }
