import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  redirectFaq(href: string) {
    this.router.navigate(['/changelog', href]);
  }

}
