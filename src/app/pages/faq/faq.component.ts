import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'gon-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  constructor(public router: Router) { }

  redirectFaq(href: string) {
    this.router.navigate(['/changelog', href]);
  }

}
