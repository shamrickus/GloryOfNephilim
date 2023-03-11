import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss']
})
export class ToTopComponent implements OnInit {
    hidden: boolean;

  constructor() { }

  ngOnInit() {
      this.hide(null);
  }

  @HostListener('window:scroll', ['$event'])
  hide(event) {
      let doc = document.documentElement;
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      this.hidden = top <= 25;

  }

  toTop() {
    window.scrollTo(0, 0);
  }

}
