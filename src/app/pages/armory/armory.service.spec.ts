import {inject, TestBed} from '@angular/core/testing';

import {ArmoryService, IItem, IRuneWord, ISocketable, nameof, Rune, SortItems} from './armory.service';
import { Sort } from "@angular/material/sort";
import {runes as runes} from "../../data/runes";
import {Duplicate} from "../../app.factory";
import {run} from "tslint/lib/runner";

function createRuneWord() {
    return <IItem>{
        Name: "",
        Version: "",
        LevelRequirement: 0,
        Properties: [],
        Runes: [],
        ItemLevel: 0,
        Type: "",
        InventoryImage: ""
    };
}

describe('ArmoryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArmoryService]
        });
    });

    it('should be created', inject([ArmoryService], (service: ArmoryService) => {
        expect(service).toBeTruthy();
    }));

    describe('Sorting',() => {
        it("sort by name", inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                item.Name = i == 0 ? "B" : i == 1 ? "A" : "C";
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("Name"),
                direction: "asc"
            };
            service.loadRunes(runes as Rune[]);
            service.loadRuneWords(Duplicate(runewords));
            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0]).toBe(runewords[1]);
            expect(sorted[1]).toBe(runewords[0]);
            expect(sorted[2]).toBe(runewords[2]);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2]).toBe(runewords[1]);
            expect(sorted[1]).toBe(runewords[0]);
            expect(sorted[0]).toBe(runewords[2]);
        }));

        it('sort by rune', inject([ArmoryService], (service: ArmoryService) => {
            service.loadRunes(runes as Rune[]);
            let runewords = <IItem[]>[];
            let rs = ["El", "Sol", "Zod"];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                (item.Runes as string[]).push(rs[2-i]);
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("Runes"),
                direction: "asc"
            };

            service.loadRuneWords(Duplicate(runewords));

            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0].Runes).toBe(runewords[2].Runes);
            expect(sorted[1].Runes).toBe(runewords[1].Runes);
            expect(sorted[2].Runes).toBe(runewords[0].Runes);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2].Runes).toBe(runewords[2].Runes);
            expect(sorted[1].Runes).toBe(runewords[1].Runes);
            expect(sorted[0].Runes).toBe(runewords[0].Runes);
        }));

        it('sort by properties', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                item.Properties = [(3 - i).toString()];
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("Properties"),
                direction: "asc"
            };
            service.loadRunes(runes as Rune[]);
            service.loadRuneWords(Duplicate(runewords));

            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0].Properties).toBe(runewords[2].Properties);
            expect(sorted[1].Properties).toBe(runewords[1].Properties);
            expect(sorted[2].Properties).toBe(runewords[0].Properties);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2].Properties).toBe(runewords[2].Properties);
            expect(sorted[1].Properties).toBe(runewords[1].Properties);
            expect(sorted[0].Properties).toBe(runewords[0].Properties);
        }));

        it('sort by type', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                item.Type = (3 - i).toString();
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("Type"),
                direction: "asc"
            };
            service.loadRunes(runes as Rune[]);
            service.loadRuneWords(Duplicate(runewords));

            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0]).toBe(runewords[2]);
            expect(sorted[1]).toBe(runewords[1]);
            expect(sorted[2]).toBe(runewords[0]);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2]).toBe(runewords[2]);
            expect(sorted[1]).toBe(runewords[1]);
            expect(sorted[0]).toBe(runewords[0]);
        }));

        it('sort by version', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                item.Version = (3 - i).toString();
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("Version"),
                direction: "asc"
            };
            service.loadRunes(runes as Rune[]);
            service.loadRuneWords(Duplicate(runewords));

            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0]).toBe(runewords[2]);
            expect(sorted[1]).toBe(runewords[1]);
            expect(sorted[2]).toBe(runewords[0]);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2]).toBe(runewords[2]);
            expect(sorted[1]).toBe(runewords[1]);
            expect(sorted[0]).toBe(runewords[0]);
        }));

        it('sort by ItemLevel', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                item.ItemLevel = 3-i;
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("ItemLevel"),
                direction: "asc"
            };
            service.loadRunes(runes as Rune[]);
            service.loadRuneWords(Duplicate(runewords));

            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0].ItemLevel).toBe(runewords[2].ItemLevel);
            expect(sorted[1].ItemLevel).toBe(runewords[1].ItemLevel);
            expect(sorted[2].ItemLevel).toBe(runewords[0].ItemLevel);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2].ItemLevel).toBe(runewords[2].ItemLevel);
            expect(sorted[1].ItemLevel).toBe(runewords[1].ItemLevel);
            expect(sorted[0].ItemLevel).toBe(runewords[0].ItemLevel);
        }));

        it('sort by Level Requirement', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRuneWord();
                item.LevelRequirement = (3 - i);
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("LevelRequirement"),
                direction: "asc"
            };
            service.loadRunes(runes as Rune[]);
            service.loadRuneWords(Duplicate(runewords));

            let sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[0].LevelRequirement).toBe(runewords[2].LevelRequirement);
            expect(sorted[1].LevelRequirement).toBe(runewords[1].LevelRequirement);
            expect(sorted[2].LevelRequirement).toBe(runewords[0].LevelRequirement);

            sort.direction = "desc";
            sorted = SortItems(sort, Duplicate(runewords));
            expect(sorted.length).toBe(3);
            expect(sorted[2].LevelRequirement).toBe(runewords[2].LevelRequirement);
            expect(sorted[1].LevelRequirement).toBe(runewords[1].LevelRequirement);
            expect(sorted[0].LevelRequirement).toBe(runewords[0].LevelRequirement);
        }));
    });
});
