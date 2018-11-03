import {inject, TestBed} from '@angular/core/testing';

import {ArmoryService, IItem, IRuneWord, nameof, Rune, SortItems} from './armory.service';
import {Sort} from "@angular/material";
import {runes as runes} from "../../data/raw/runesLevels";
import {Duplicate} from "../../app.factory";

function createRune() {
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
                let item = createRune();
                item.Name = i == 0 ? "B" : i == 1 ? "A" : "C";
                item.Runes = [runes[0].Name];
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
                let item = createRune();
                item.Runes = [service.getByName(rs[3-i])];
                item.Name = i.toString();
                runewords.push(item);
            }
            let sort = <Sort>{
                active: nameof("Runes"),
                direction: "asc"
            };
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

        it('sort by properties', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRune();
                item.Name = (3 - i).toString();
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

        it('sort by type', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRune();
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
                let item = createRune();
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
                let item = createRune();
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

        it('sort by Level Requirement', inject([ArmoryService], (service: ArmoryService) => {
            let runewords = <IItem[]>[];
            for (let i = 0; i < 3; ++i) {
                let item = createRune();
                item.Version = (3 - i).toString();
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
    });
});
