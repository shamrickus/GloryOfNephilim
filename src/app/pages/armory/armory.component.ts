import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArmoryService, IItem, IProperty, ISocketable, SortItems} from "./armory.service";
import {MatTableDataSource, Sort} from "@angular/material";

@Component({
    selector: 'app-armory',
    templateUrl: './armory.component.html',
    styleUrls: ['./armory.component.scss']
})
export class ArmoryComponent implements OnInit {
    private itemsSource: IItem[];
    private types: string[];
    public dataSource: MatTableDataSource<IItem> = new MatTableDataSource<IItem>();
    public displayColumns: string[];

    constructor(private _armory: ArmoryService, private _change: ChangeDetectorRef) {
    }

    updateItems(items: IItem[]) {
        this.itemsSource = items;
        this.dataSource.data = items;
        this.dataSource.filterPredicate = (data:IItem, filter: string) => {
            return data.Name.indexOf(filter) != -1 ||
            data.LevelRequirement.toString().indexOf(filter) != -1 ||
            (data.Runes as ISocketable[]).map(r => r.Name).join("").indexOf(filter) != -1 ||
            data.Version.toString().indexOf(filter) != -1 ||
            (data.Properties as string[]).join("").indexOf(filter) != -1 ||
            data.Type.indexOf(filter) != -1 ||
            data.Runes.length.toString().indexOf(filter) != -1;
        };
        this.types = this.getTypes();
    }

    ngOnInit() {
        this.updateItems(this._armory.getItems());
        this._armory.change.subscribe(e => {
            this.updateItems(e);
        });
        this.displayColumns = ['Name', "Runes", "Type", "Version", "LevelRequirement", "Properties"];
    }

    filter(filterValue: string) {
        this.dataSource.filter = filterValue;
   }

    getTypes() {
        let ret = [];
        for(let item of this.itemsSource) {
            if(ret.indexOf(item.Type) == -1)
               ret.push(item.Type);
        }
        return ret;
    }

    sortData(sort: Sort) {
        this.dataSource.data = SortItems(sort, this.dataSource.data);
        this._change.detectChanges();
    }

}
