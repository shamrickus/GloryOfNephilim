import {Component, OnInit} from '@angular/core';
import {Button} from "./app.module";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'gon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	activeLink: number = -1;
	public buttons: Button[] = [
		{text: "Home", path: "home", active: true},
		{text: "Changes", path: "changelog", active: false},
		{text: "Armory", path: "armory", active: false},
		{text: "Patches", path: "patches", active: false},
		{text: "FAQ", path: "faq", active: false},
		{text: "ModDB", path: "http://www.moddb.com/mods/glory-of-nephilim", active: false},
		{text: "Discord", path: "https://discord.gg/G9AxyS9", active: false}];
	public downloadButton: Button = {text: "DL", path: "http://www.moddb.com/mods/glory-of-nephilim/downloads/", active: false};
	public fancyText: boolean;


	constructor(public router: Router) { }
	ngOnInit(): void {
		this.router.events.subscribe(res => {
			this.activeLink = this.buttons.indexOf(
				this.buttons.find(tab => tab.path === "." + this.router.url)
			);
		})
	}

	fontType(): string {
		return this.fancyText ? "diablo" : "normal";
	}
}
