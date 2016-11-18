import { Component } from '@angular/core';
import { ColorListService } from './color-list.service';

@Component ({
	selector: 'room-scene',
	template:`
		<div class="room-scene__svg-wrapper">
		<svg class="room-scene__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet" height="100%" width="100%">
			<defs class="svg-defs">
				<mask id="scene-zoom__mask" preserveAspectRatio="xMinYMin meet">
					<image xlink:href="../images/room-walls-export-mask.png" x="0" y="0" height="100%" width="100%" />
				</mask>
				<filter id="scene-zoom__filter">
					<feFlood id="stain-sample__filter--tint" flood-color="#abcdef" result="tintHue" />
					<feBlend mode="multiply" in="tintHue" in2="SourceGraphic" result="darkenedSample" />
				</filter>    
			</defs>
			<image xlink:href="../images/room-walls-export.png" filter="url(#scene-zoom__filter)" mask="url(#scene-zoom__mask)" x="0" y="0" height="100%" width="100%" />
		</svg>
		</div>
		<img class="room-scene__image" src="../images/room-small.jpg" />
	`
})

export class RoomSceneComponent {
	constructor( private ColorListService: ColorListService) {
		this.ColorListService.ListColors();
	}
};