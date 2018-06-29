import {Component, OnInit} from '@angular/core';

export interface IPatches {
	date: string;
	changes: string[];
	collapsed: boolean;
}

export const PATCHES = [
    <IPatches>{
		date: '05/30/2018',
		changes: [ "Difficulty Balance Tweaks"],
		collapsed: true
	},
    <IPatches>{
        date: "05/20/2018",
        changes: [
            "Some stats of set items were diversified",
			"Magic, rare, and socketed items can not be disenchanted anymore",
            "Output jewels - Timeless and warped items 3, set items 2, unique items 1",
            "Disenchanting of unique, set, timeless, and warped items - Any Perfect Gem x1 + item + White Potion",
			"Looped Time Fragment - Warped Rune x3 + Golden Potion",
			"Add skill on Timeless item (+3 lvl req) - Timeless item + Perfect Gem (class dependant) + Jewel x3 + nonstacked Key x? (skill dependant) + Looped Time Fragment",
			"Make Item Timeless - Superior nonsocketed gloves or boots + Looped Time Fragment + Jewel",
			"Make item warped - item + Any Perfect Game x3 + Jewel x3 + Golden Potion"
        ],
        collapsed:true
    },
    <IPatches>{
        date: "05/18/2018",
        changes: [
            "Increased level of all monster on hell",
			"Fixed a bug with Dark Diablo's Conviction skill",
			"Added cows around Dark Diablo"
        ],
        collapsed:true
    },
    <IPatches>{
        date: "May 3rd, 2018",
        changes: [
            "Dark Diablo now drops only one special charm instead of 8",
            "Dark Diablo now in every red portal outside of act 5",
            "Truemage in act 3 drops good stuff",
            "Overall monsters resistences lowered: 0/30/60, physical and magical: 0/10/20",
            "Druid and Necromancer summon resist altered",
            "Druid can now summon 2 bears",
            "Necro revives deal 2x damage but have .5x hp",
            "Amazon magic arrow, multiple shot, strafe buffed",
        ],
        collapsed:true
    },
    <IPatches>{
        date: "April 9th, 2018",
        changes: [
            "Disenchanting of set, timeless and warped items now gives 3 jewels instead of 2",
			"Unique jewel crafting recipe now requires 4 jewels instead of 6",
			"Item level of all uniques now <= 70",
            "All high level items can be found even act 1 of hell",
			"Added and changed some unique items"
        ],
        collapsed:true
    },
	<IPatches>{
		date: "March 18th, 2018",
		changes: [
			"Various bug fixes with timeless items"
		],
		collapsed:true
	},
	<IPatches>{
		date: "February 11th, 2018",
		changes: [
			"New Mercenaries:",
			"Act 1 - Rouge Scout Combat - Multiple Shot, Penetrate, Attract, Avoid, Blessed Aim",
			"Act 3 - Eastern Sorcerer Bone Mage - Bone Spear, Bone Spirit, Teeth, Salvation",
			"Added class specific items to gamble",
			"Reduced monster density on boss areas and arcane sanctuary."],
		collapsed: true
	},
    <IPatches>{
        date: "April 2017 - February 2018",
        changes: [ "Various changes (patch log missing)"],
        collapsed: true
    },
	<IPatches>{
		date: "April 17th, 2017",
		changes: [
			"DISCORD https://discord.gg/BhQ28tp",
			"Fixed Cain's hope ring",
			"Added bosses' bodies amulets crafting recipes"
		],
		collapsed:true
	},
	<IPatches>{
		date: "March 21st, 2017",
		changes: [
			"Added new uniques and 1 new set ",
			"Necromancer now can summon 10 skeletons of each type and 5 revives, their damage and hp reduced a little ",
			"Druid's pets damage reduced, Poison Creeper damage increased ",
			"Reduced some set bonuses ",
			"Fixed some uniques "
		],
		collapsed: true
	},
	<IPatches>{
		date: "March 17th, 2017",
		changes: [
			"Changed descriptions to some items. ",
			"Reduced light radius to all player's characters ",
			"Added torches to reveal a darkness around ",
			"Reduced quantity of jewels needed to create unique jewel 10 -> 6 ",
			"Unique jewels now have more randomized stats ",
			"Timeless items now more expensive ",
			"Reduced quantity of souls needed to create Aeon's Greater Blessing ",
			"Aeon's Greater Blessing now gives +5 stats and +1 skill ",
			"Removed jewels from rune upgrade and downgrade recipes ",
			"Alkor now sells items again (lazy grandpa) ",
			"Removed reducing mana use for all skills ",
			"Durability of all items ",
			"Necromancer's Iron Maiden damage return increased, Corpse Explosion damage reduced and fixed radius, Skeletons warriors and mages damage increased ",
			"Sorc's Nova, Hydra damage reduced, Energy Shield consumes more mana ",
			"Druid's pets damage increased ",
			"Merging recipes for rings, amulets, charms changed ",
			"Dark Diablos now have 100% elemental resistances. You need to reduce their resistances by skills to remove an immunity (HELL only) ",
			"Added 4 new uniques "
		],
		collapsed: true
	},
	<IPatches>{
		date: "March 11th, 2017",
		changes: [
			"Reduced monsters density in Arcane Sanctuary on Nightmare and Hell ",
			"Removed some unique charms ",
			"Removed antidote and thawing potions from shops ",
			"Added Timeless Items "
		],
		collapsed: true
	},
	<IPatches>{
		date: "March 4th, 2017",
		changes: [
			"Mod now packed in MPQ ",
			"Mod now using 1.13c game core ",
			"Added Token of Absolution creation recipe ",
			"Added Blessings recipes ",
			"Added Soul Dusts in boss drops ",
			"Reduced chill effect of Holy Freeze aura ",
			"Mana leech increased to 100% / 50% / 25% ",
			"Changed some drop colors "
		],
		collapsed: true
	},
	<IPatches>{
		date: "Feburary 27th, 2017",
		changes: [
			"Paladin's resistance auras skills nerfed. (Because global resistances penalty was reduced)",
			"Crafted items recipes turned off because nobody uses them. Maybe I will redo them later",
			"Forsworn sword now have not so bad stats as before",
			"Barbarian's natural resistances nerfed. (Because global resistances penalty was reduced)"
		],
		collapsed: true
	},
	<IPatches>{
		date: "Feburary 24th, 2017",
		changes: [
			"Added beautiful light colors for bosses ",
			"Changed some monsters skills ",
			"Poison clouds now spread wider and faster ",
			"Reduced monsters density in some locations ",
			"Reduced resistance penalty on NIGHTMARE and HELL to -100\-200 ",
			"Healing potions heals slower ",
			"Barbarian's War Cry skill increased damage but reduced stun"
		],
		collapsed: true
	},
	<IPatches>{
		date: "Feburary 23rd, 2017",
		changes: [
			"All stamina affixes replaced by vitality and hp affixes ",
			"Maximum number of sockets in item is < Item’s Height X Item’s Weight >, but no more than 6 ",
			"Damage of mercenaries on normal and nightmare was reduced to 50% and 75%. Applied only on bosses",
			"Druid's Hunger skill now have no damage penalty but life and mana steal reduced. Shock Wave now inflicts more damage but less stun. Maul and Fury buffed",
			"Paladin's Zeal buffed ",
			"Amazon's Strafe shots reduced to 20 maximum to not to stick in place. Impale and Fend buffed ",
			"Assassin's Psychic Hammer buffed"
		],
		collapsed: true
	},
	<IPatches>{
		date: "Feburary 17th, 2017",
		changes: [
			"Berserker set bonus fix ",
			"Sorceress' Hydra synergy nerfed 20 -> 17% ",
			"Buffed Necromancer's Teeth, Bone Spear, Bone Spirit, Poison Dagger, Poison Explosion, Poisn Nova after skill level 22; damage for Skeleton Warriors, hp to Steleton Mages ",
			"Buffed Druid's Ravens; added more resistances to Spirit Wolves, Dire Wolves and Grizzly ",
			"Buffed Assassin's max crit chance on Claw Mastery, Fade max resist bonus, speed bonuses from Burst of Speed ",
			"Barbarian's Increased Stamina skill limited to 1 and Increased Speed is not receives bonuses from it; buffed Whirlwind, Concentrate, Frenzy ",
			"Buffed Amazon's Jab skill ",
			"Buffed all Paladin's resistance auras ",
			"Added a link to mod's site in d2se menu"
		],
		collapsed: true
	},
	<IPatches>{
		date: "Feburary 6th, 2017",
		changes: [
			"Removed all pre-reqs for skills (except level requirements)."
		],
		collapsed: true
	},
	<IPatches>{
		date: "January 30th, 2017",
		changes: [
			"Removed ShadowMaster from Dark Stone charm."
		],
		collapsed: true
	}
];

@Component({
	selector: 'app-patches',
	templateUrl: './patches.component.html',
	styleUrls: ['./patches.component.scss']
})
export class PatchesComponent implements OnInit {
	patches: IPatches[];

	constructor() {
		for(let i = 0; i < PATCHES.length && i < 2; ++i) {
			PATCHES[i].collapsed = false;
		}
	}

	ngOnInit() {
		this.patches = PATCHES;
	}

}
