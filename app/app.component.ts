import { Component } from '@angular/core';

@Component({
  selector: 'perfect-color-app',
  template: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">
                <defs>
                    <mask id="wallMask" preserveAspectRatio="xMinYMin meet">
                        <g class="group">
                        </g>
                    </mask>

                    <filter id="scene__filter">
                        <feFlood id="stain-sample__filter--tint" flood-color="red" result="tintHue" />
                        <feBlend mode="multiply" in="tintHue" in2="SourceGraphic" result="darkenedSample" />
                    </filter>

                    <g id="room-scene-SVG">
                        <image  class="room-scene__image" xlink:href="./images/room-small.jpg" filter="url(#scene__filter_previous)" x="0" y="0" height="100%" width="100%" />
                        <image  class="room-scene__image" xlink:href="./images/room-small.jpg" filter="url(#scene__filter_current)" x="0" y="0" height="100%" width="100%" />
                        <image  class="room-scene__image" xlink:href="./images/room-small.jpg" mask="url(#scene__mask)" x="0" y="0" height="100%" width="100%" />
                        <!-- <image class="room-scene__image room-scene__image--foreground" xlink:href="./images/room-foreground.png" x="0" y="0" height="100%" width="100%" /> -->
                    </g>
                </defs>
            </svg>
            `
})

export class AppComponent { }