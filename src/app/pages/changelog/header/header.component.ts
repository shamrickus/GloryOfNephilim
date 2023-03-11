import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IChange} from "../changelog.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input('change') change: IChange;
    @Output() onClick = new EventEmitter<string>();

    constructor() {
        if(this.change == null)
            this.change =  {subCat: null , name: "", href: "", collapsed: true, changes: []};
    }

    ngOnInit() {
    }

    scroll(href: string) {
        this.onClick.emit(href);
    }
}
