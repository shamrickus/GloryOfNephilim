import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Sort} from "@angular/material";
import {nameofFactory} from "./app.factory";
import {runewords} from "./runewords";

@Injectable({
    providedIn: 'root'
})
export class ArmoryService  implements OnInit{
    private items: IItem[] = [];
    @Output() change: EventEmitter<IItem[]> = new EventEmitter<IItem[]>();

    ngOnInit() {
    }

    constructor() {
        this.items = runewords;
        this.change.emit(this.items);
    }

    getItems() {
        return this.items;
    }
}

export interface IProperty {
    FormattedString: string;
    Min: number;
    Max: number;
}

export interface IRuneWord extends IItem {
    Runes: string[];
}

export interface IItemType {

}


const nameof = nameofFactory<IItem>();
export interface IItem {
    Name: string;
    ItemLevel?: number;
    LevelRequirement?: number;
    Type: string;//IItemType;
    InventoryImage?: string;
    Version?: number;
    Runes: string[];
    Properties: string[];//IProperty[];
}

export function SortItems(sort: Sort, data) {
    if (!sort.active || sort.direction === '') {
        return data;
    }

    return data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
            case nameof("Name"):
                return compare(a.Name, b.Name, isAsc);
            case nameof('Properties'):
                return compare(a.Properties, b.Properties, isAsc);
            case nameof('Type'):
                return compare(a.Type, b.Type, isAsc);
            case nameof('LevelRequirement'):
                return compare(a.LevelRequirement, b.LevelRequirement, isAsc);
            case nameof('ItemLevel'):
                return compare(a.ItemLevel, b.ItemLevel, isAsc);
        }
    });

    function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
