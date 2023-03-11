import {Component, Input, OnInit} from '@angular/core';
import {Button} from "../app.module";
import {Router} from "@angular/router";

@Component({
  selector: 'gon-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Input('buttons') buttons: Button[];
    activeLinkIndex: number = -1;

  constructor(public routes: Router) { }

  ngOnInit() {
	this.routes.events.subscribe((res) => {
		for(let button of this.buttons) {
		  button.active = false;
        }
		let button = this.buttons.find(tab => tab.path === this.routes.url.split("/")[1]);
		if(button != null)
			button.active = true;
    });  }
}
