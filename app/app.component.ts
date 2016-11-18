import { Component } from '@angular/core';
import { RoomSceneComponent } from './room-scene.component';

@Component({
  selector: 'perfect-color-app',
  template: `
            <room-scene></room-scene>
            <room-scene-zoom></room-scene-zoom>
            `
})

export class AppComponent { }