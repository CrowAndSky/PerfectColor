import { Component } from '@angular/core';

@Component ({
	selector: 'room-scene-zoom',
	template:`
		<div class="room-scene-zoom__content-wrapper">
			<div class="room-scene-zoom__svg-wrapper">
				<svg class="room-scene__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet" >
					<defs class="svg-defs">
						<mask id="scene-zoom__mask" preserveAspectRatio="xMinYMin meet">
							<image class="room-scene-zoom__image" xlink:href="../images/room-walls-export-zoom-mask.png" x="0" y="0" />
						</mask>
						<filter id="scene-zoom__filter">
							<feFlood id="stain-sample__filter--tint" flood-color="#abcdef" result="tintHue" />
							<feBlend mode="multiply" in="tintHue" in2="SourceGraphic" result="darkenedSample" />
						</filter>    
					</defs>
					<image class="room-scene-zoom__image" xlink:href="../images/room-walls-export-zoom.png" filter="url(#scene-zoom__filter)" mask="url(#scene-zoom__mask)" x="0" y="0" />
				</svg>			
			</div>
			<img class="room-scene-zoom__image" src="../images/room-export-zoom.jpg" />
		</div>
	`
})

export class RoomSceneZoomComponent { };