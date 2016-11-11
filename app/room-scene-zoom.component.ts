import { Component } from '@angular/core';

@Component ({
	selector: 'room-scene',
	template:`
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet" height="100%" width="100%">
			<defs class="svg-defs">
				<mask id="scene__mask" preserveAspectRatio="xMinYMin meet">
					<image class="room-scene__image" xlink:href="../images/room-walls-export-mask.png" x="0" y="0" height="100%" width="100%" />
				</mask>
				<filter id="scene__filter">
					<feFlood id="stain-sample__filter--tint" flood-color="#bada55" result="tintHue" />
					<feBlend mode="multiply" in="tintHue" in2="SourceGraphic" result="darkenedSample" />
				</filter>    
			</defs>
			<g class="room-scene__group">
				<image class="room-scene__image" xlink:href="../images/room.jpg" x="0" y="0" height="100%" width="100%" />
				<image class="room-scene__image" xlink:href="../images/room-walls-export.png" filter="url(#scene__filter)" mask="url(#scene__mask)"  x="0" y="0" height="100%" width="100%" />
			</g>
		</svg>
		room-walls-export-zoom
room-walls-export-zoom-mask
room-export-zoom
	`
})

export class RoomSceneComponent { };