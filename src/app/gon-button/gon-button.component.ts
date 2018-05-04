import {Component, Input, OnInit} from '@angular/core';
import {Button} from "../app.module";
import {Router} from "@angular/router";

@Component({
  selector: 'gon-button',
  templateUrl: './gon-button.component.html',
  styleUrls: ['./gon-button.component.scss']
})
export class GonButtonComponent implements OnInit {
	@Input('button') button: Button;
	@Input('pop') pop: boolean;

  constructor(public routes: Router) { }

  ngOnInit() {
  }

  getClass(): string {
  	return this.button.active ? "touched" : "untouched";
  }

  getText(): string {
    return this.button.text;
  }

  onClick() {
      if(this.pop) {
          this.button.active = true;
          setTimeout(() => {
              this.button.active = false;
          }, 1500);
      }
      this.goto();
  }

    goto() {
        if(this.button.path.startsWith("http"))
            window.open(this.button.path, '_blank');
        else
            this.routes.navigateByUrl(this.button.path);
    }
}
