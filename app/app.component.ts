import { Component } from '@angular/core';
import { RoomSceneComponent } from './room-scene.component';

@Component({
  selector: 'perfect-color-app',
  template: `
            <div class="room-scene__wrapper"><room-scene></room-scene></div>
            <div class="room-scene__wrapper room-scene__wrapper--zoomed"><room-scene></room-scene></div>
            `
})

export class AppComponent { }