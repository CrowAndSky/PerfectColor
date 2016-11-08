import { Component } from '@angular/core';

@Component ({
	selector: 'room-scene',
	template:`
		<svg class="room-scene" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">
			<use x="0" y="0" xlink:href="#room-scene-SVG" class="" />
		</svg>
	`
})

export class RoomSceneComponent { };