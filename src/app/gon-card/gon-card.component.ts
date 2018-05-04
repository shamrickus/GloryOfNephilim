import {Component, Input, OnInit} from '@angular/core';

export enum CARDTYPES {PRIMARY = 0, SECONDARY = 1}

@Component({
  selector: 'gon-card',
  templateUrl: './gon-card.component.html',
  styleUrls: ['./gon-card.component.scss']
})
export class GonCardComponent implements OnInit {
  @Input('type') type: CARDTYPES;
  cardClass: string;

  constructor() {
  }

  ngOnInit() {
      if(this.type == CARDTYPES.PRIMARY)
          this.cardClass = "prim";
      if(this.type == CARDTYPES.SECONDARY)
          this.cardClass = "sec";
  }

}
