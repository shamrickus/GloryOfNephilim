import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IChange} from "../changelog.component";

@Component({
    selector: 'gon-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() change: IChange;
    @Output() clickEvt = new EventEmitter<string>();

    constructor() {
        if(this.change == null)
            this.change =  {subCat: null , name: "", href: "", collapsed: true, changes: []};
    }

    scroll(href: string) {
        this.clickEvt.emit(href);
    }
}
