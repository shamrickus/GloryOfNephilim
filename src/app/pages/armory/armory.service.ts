import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import { Sort } from "@angular/material/sort";
import {nameofFactory} from "../../app.factory";
import {runewords} from "../../data/runewords";
import {runes} from "../../data/runes";

@Injectable({
    providedIn: 'root'
})
export class ArmoryService {
    private items: IItem[] = [];
    private runes: Rune[] = [];
    @Output() changeEvt: EventEmitter<IItem[]> = new EventEmitter<IItem[]>();

    getByName(pName: string): ISocketable {
        for (let rune of this.runes) {
            if (rune.Name == pName)
                return rune;
        }
    }

    getLevelRequirement(item: IItem) {
        let maxLvl = 0;
        for (let rune of item.Runes) {
            if (typeof(rune) === typeof({})
                && (rune as ISocketable).Level > maxLvl)
                maxLvl = (rune as ISocketable).Level;
        }
        return maxLvl;
    }

    loadRuneWords(rws: IRuneWord[]) {
        this.items = rws;
        for (let item of this.items) {
            let tempRunes = <ISocketable[]>[];
            if (item.Runes) {
                for (let rune of item.Runes) {
                    if (rune)
                        tempRunes.push(this.getByName(rune.toString()));
                }
                item.Runes = tempRunes;
                item.LevelRequirement = this.getLevelRequirement(item);
            }
        }
        this.changeEvt.emit(this.items);
    }

    getRuneNames() : string[] {
        let ret = [];
        for(let rune of this.runes) {
            ret.push(rune.Name);
        }
        return ret;
    }

    loadRunes(runes: Rune[]) {
        this.runes = runes;
    }

    constructor() {
        this.loadRunes(runes);
        this.loadRuneWords(runewords);
    }

    getItems() {
        return this.items;
    }
}

export interface IProperty {
    FormattedString: string;
    Min: number;
    Max: number;
    Param: string;
    PropertyId: string;
}

export class Property implements IProperty {
    FormattedString: string;
    Max: number;
    Min: number;
    Param: string;
    PropertyId: string;

    IsSameProperty(prop: Property): boolean {
        return this.PropertyId == prop.PropertyId;
    }

    IsAlmostEqual(prop: Property): boolean {
        if (this.PropertyId == prop.PropertyId) {
            let reg = "[" + this.Min + "-" + this.Max + "|" + prop.Min + "-" + prop.Max + "|" + this.Min + "|" + prop.Min + "]";
            let re = new RegExp(reg, "G");

            if(this.FormattedString.replace(re, "") ==
                prop.FormattedString.replace(re, ""))
                return true;
        }
        return false;
    }
}

enum SlotType {Armor, Weapon, Shield}
export class SocketSlotType {
    slot: SlotType;
    constructor(pType: string){
        this.slot = this.SlotTypeFromString(pType);
    }

    SlotTypeToString(): string {
        if (this.slot == SlotType.Shield)
            return "Shield";
        if (this.slot == SlotType.Armor)
            return "Armor";
        if (this.slot == SlotType.Weapon)
            return "Weapon";
    }

    SlotTypeFromString(value: any): SlotType {
        if (value["Armor"] !== undefined)
            return SlotType.Armor;
        if (value["Weapon"] !== undefined)
            return SlotType.Weapon;
        if (value["Shield"] !== undefined)
            return SlotType.Shield;
    }
}

export interface IMultiProperty extends IProperty {
    Slot: SlotType;
}

export class MultiProperty extends Property implements IMultiProperty {
    Slot: SlotType;
}

enum SocketType {
    Gem, Rune
};

export interface ISocketable {
    //r[0-3][0-9] | < 33, > 0 for runes
    Id: string;
    Name: string;
    Level: number;
    Type: SocketType;
    Properties: IMultiProperty[];
}

export class Socketable implements ISocketable {
    Id: string;
    Level: number;
    Name: string;
    NumMods: number;
    Properties: IMultiProperty[];
    Type: SocketType;
}

export class Rune extends Socketable {
    constructor() {
        super();
        this.Type = SocketType.Rune;
    }
}

export interface IRuneWord extends IItem {
    Runes: string[];
}

export const nameof = nameofFactory<IItem>();

export interface IItem {
    Name: string;
    ItemLevel?: number;
    LevelRequirement?: number;
    Type: string;//IItemType;
    InventoryImage?: string;
    Version?: string | number;
    Runes: ISocketable[] | string[];
    Properties: string[] | IProperty[];
}


function GetRuneNames(runes: ISocketable[]): string[] {
    return runes.map((rune) => rune ? rune.Name : "");
}


export function SortItems(sort: Sort, data: IItem[]): IItem[] {
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
            case nameof("Version"):
                return compare(a.Version.toString(), b.Version.toString(), isAsc);
            case nameof("Runes"):
                let aNames = GetRuneNames(a.Runes as ISocketable[]).join("");
                let bNames = GetRuneNames(b.Runes as ISocketable[]).join("");
                return compare(aNames, bNames, isAsc);
        }
    });

    function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
