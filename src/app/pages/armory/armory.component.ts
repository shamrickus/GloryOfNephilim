import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArmoryService, IItem, IProperty, ISocketable, Socketable, SortItems} from "./armory.service";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {operators} from "rxjs/internal/Rx";
import {FormControl} from "@angular/forms";

interface MathOperator {
	text: string;
	hint: string;
	filter: (value: string, dataElement: number) => boolean;
}

interface ItemFilter {
	socketsOperator: MathOperator;
	socketsInput: string;
	nameInput: string;
	propertiesInput: string;
	lvlOperator: MathOperator;
	lvlInput: string;
	typeInput: string[];
	versionInput: string[];
	runeInput: string[];
	generalInput: string;
}

@Component({
	selector: 'app-armory',
	templateUrl: './armory.component.html',
	styleUrls: ['./armory.component.scss']
})
export class ArmoryComponent implements OnInit {
	private itemsSource: IItem[];
	private types: string[];
	private runes: string[];
	public dataSource: MatTableDataSource<IItem> = new MatTableDataSource<IItem>();
	public displayColumns: string[];
	public advanced: boolean = false;
	private operators: MathOperator[] = [];
	private filterModel: ItemFilter = <ItemFilter>{};

	constructor(private _armory: ArmoryService, private _change: ChangeDetectorRef) {
		this.dataSource.filter = "";
	}

	updateItems(items: IItem[]) {
		this.itemsSource = items;
		this.dataSource.data = items;
		// @ts-ignore
		this.dataSource.filterPredicate = (data: IItem, filter: ItemFilter) => {
			if (this.advanced) {
				let itemFilter = <ItemFilter>filter;
				let result = true;
				if (itemFilter.socketsOperator != null && itemFilter.socketsInput != "" && itemFilter.socketsInput != null)
					result = result && itemFilter.socketsOperator.filter(itemFilter.socketsInput, data.Runes.length);
				if (itemFilter.nameInput != null && itemFilter.nameInput != "")
					result = result && data.Name.toLowerCase().indexOf(itemFilter.nameInput.toLowerCase()) > -1;
				if (itemFilter.propertiesInput != null && itemFilter.propertiesInput != "")
					result = result && data.Properties.join("").toLowerCase().indexOf(itemFilter.propertiesInput.toLowerCase()) > -1;
				if (itemFilter.lvlOperator != null && itemFilter.lvlInput != "" && itemFilter.lvlInput != null)
					result = result && itemFilter.lvlOperator.filter(itemFilter.lvlInput, data.LevelRequirement);
				if (itemFilter.typeInput != null && itemFilter.typeInput.length > 0) {
					let any = false;
					for (let type of itemFilter.typeInput)
						any = any || data.Type.split("/").indexOf(type) > -1;
					result = result && any;
				}
				if (itemFilter.runeInput != null && itemFilter.runeInput.length > 0) {
					let any = false;
					for (let rune of itemFilter.runeInput)
						any = any || (<ISocketable[]>data.Runes).filter(ele => ele.Name.toLowerCase().indexOf(rune.toLowerCase()) > -1).length > 0;
					result = result && any;
				}
				return result;
			}
			let textFilter = filter.generalInput;
			return (textFilter === undefined ? true : data.Name.indexOf(textFilter) != -1 ||
				data.LevelRequirement.toString().indexOf(textFilter) != -1 ||
				(data.Runes as ISocketable[]).map(r => r.Name).join("").indexOf(textFilter) != -1 ||
				data.Version.toString().indexOf(textFilter) != -1 ||
				(data.Properties as string[]).join("").indexOf(textFilter) != -1 ||
				data.Type.indexOf(textFilter) != -1 ||
				data.Runes.length.toString().indexOf(textFilter) != -1);
		};
		this.types = this.getTypes();
		this.runes = this._armory.getRuneNames();
	}

	ngOnInit() {
		this.operators.push(<MathOperator>{text: "≤", filter: (value, dataElement) => +value >= dataElement});
		this.operators.push(<MathOperator>{text: "≥", filter: (value, dataElement) => +value <= dataElement});
		this.operators.push(<MathOperator>{text: "=", filter: (value, dataElement) => +value == dataElement});
		this.filterModel.socketsOperator = this.operators[this.operators.length - 1];
		this.filterModel.lvlOperator = this.filterModel.socketsOperator;
		this.operators.push(<MathOperator>{text: "<", filter: (value, dataElement) => +value > dataElement});
		this.operators.push(<MathOperator>{text: ">", filter: (value, dataElement) => +value < dataElement});
		this.updateItems(this._armory.getItems());
		this._armory.change.subscribe(e => {
			this.updateItems(e);
		});
		this.displayColumns = ['Name', "Runes", "Type", "Version", "LevelRequirement", "Properties"];
	}

	onKeyDown(evt: any) {
		if (evt.keyCode >= 65 && evt.keyCode <= 90)
			evt.preventDefault();
	}

	onFilterUpdate() {
		// @ts-ignore
		this.dataSource.filter = this.filterModel;
	}

	toggle() {
		this.advanced = !this.advanced;
		this.onFilterUpdate();
	}

	getTypes() {
		let ret = [];
		for (let item of this.itemsSource) {
			let types = item.Type.split("/");
			for (let type of types) {
				if (ret.indexOf(type) == -1)
					ret.push(type);
			}
		}
		return ret;
	}

	sortData(sort: Sort) {
		this.dataSource.data = SortItems(sort, this.dataSource.data);
		this._change.detectChanges();
	}

}
