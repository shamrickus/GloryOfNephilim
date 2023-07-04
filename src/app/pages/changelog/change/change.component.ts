import {Component, Input, OnInit} from '@angular/core';
import {IChange} from "../changelog.component";

@Component({
  selector: 'gon-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent {
  @Input() change: IChange;

  constructor() {
    if(this.change == null)
      this.change = {changes: [], collapsed: false, href: "", name: "", subCat: null};
  }
}
