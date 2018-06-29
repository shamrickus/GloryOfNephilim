import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmoryService {
  private items: IItem[];

  constructor() { }
}

interface IProperty {
  Type: string;
  ExtraInfo: string;
  Min: number;
  Max: number;
}

interface IItem {
  Name: string;
  ItemLevel: number;
  LevelRequirement: number;
  Type: string;
  InventoryImage: string;
  Properties: IProperty[];
}
