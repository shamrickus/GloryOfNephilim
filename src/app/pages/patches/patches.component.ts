import {Component, OnInit} from '@angular/core';

export interface IPatches {
	date: string;
	//parseDate: Date;
	changes: string[];
	collapsed: boolean;
}


export let PATCHES = [
	/*
	<IPatches>{
		date:'dd/mm/2021',
		changes: [

		],
		collapsed: true
	},
	*/
	<IPatches>{
		date:'08/16/2022',
		changes: [
			"Changes to dll files",
			"Proper inventory size fixed"
		],
		collapsed: true
	},
	<IPatches>{
		date:'05/20/2022',
		changes: [
			"Buffed large hp and mana potions",
			"Added a short path from the harem to the basement of the palace lvl 3",
			"Changed the population of the den of evil on nightmare and hell",
			"Quill rats in act 1 are weakened",
			"Amazon: Buffed magic arrow, critical strike, pierce, penetration, reduced mana cost for multiple arrow strafe, lightning fury, and removed delay from slow missiles",
			"Paladin: Fist of heavens has become magic, fist of heavens and holy belt hit everyone. Buffed holy bolt, blessed hammer, fist of heaven",
			"Barbarian: Buffed leap, leap attack, all weapon masteries",
			"Added crushing blow to zeal, lycantropy, weapon masteries, critical strike",
			"Updated base mods & pluggy"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/05/2022',
		changes: [
			"Added missing names for 3 unique swords",
			"Various changes"
		],
		collapsed: true
	},
	<IPatches>{
		date:'07/11/2021',
		changes: [
			"BaseMod update for autopickup of gems, jewels, rings, runes, amulets"
		],
		collapsed: true
	},
	<IPatches>{
		date:'06/15/2021',
		changes: [
			"Fixed game slowdown at the beginning of the game session for some PCs"
		],
		collapsed: true
	},
	<IPatches>{
		date:'05/30/2021',
		changes: [
			"Fixed an issue with Wind and Wind Fury having incorrect stats",
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/18/2021',
		changes: [
			"Elemental masteries are slightly weakened, as there are affixes on items for piercing resistances",
			"Reduced cooldown of some skills",
			"Weakened the efficiency of energy shield by 20%",
			"Succubi in Act 5 now use Amplify Damage over Baal's Curse",
			"Stygian fetishes should be less fatal",
			"Nephilim hunters have become weaker and slower",
			"Chances of using mercenary skills have been changed",
			"Improved Act 5 mercenary",
			"Skill charges of non-unique items are replace by oskills"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/17/2021',
		changes: [
			"Changed distribution for all affixes - now they all have a level req less than 70"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/16/2021',
		changes: [
			"Smoother transition between difficulty levels",
			"Changed the illumination colors of hard locations, they now have a red aura",
			"Greatly reduced the chance of junk dropping from bosses",
			"Improved the quality of the dropped runes",
			"Removed nephilim hunters from places where they shouldn't be"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/15/2021',
		changes: [
			"Added new elemental and mana affixes for all items",
			"Reduced the duration of poison on weapons (damage inflicted remains the same)"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/07/2021',
		changes: [
			"Updated PlugY version",
			"Removed multiplayer version of mod - new version of PlugY handles MP correctly now",
			"Fixed merc ring slot",
			"Added piercing for immune mobs, have 99% resistance",
			"Changed UberQuest to be more like vanilla, Nephilim Hunters removed - bosses willl summ their minions"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/05/2021',
		changes: [
			"Increase manacost for Energy Shield",
			"Change sets: Tal Rasha, Trang'Oul, Falsum, Sanders, Disciple, Heaven's Brethren, Orphan's Call",
			"Added 3 unique crystal swords"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/03/2021',
		changes: [
			"Act 1 hirelings can now equip crossbows and amazon bows",
			"Fixed some .dll file issues"
		],
		collapsed: true
	},
	<IPatches>{
		date:'07/10/2020',
		changes: [
			"Reduced all mobs resistances on nightmare and hell difficulties",
			"Changed some stats on gems"
		],
		collapsed: true
	},
	<IPatches>{
		date:'06/04/2020',
		changes: [
			"Fixed incorrect strings on runewords"
		],
		collapsed: true
	},
	<IPatches>{
		date:'10/03/2020',
		changes: [
			"Fixed a problem with \"always magic class only items\"",
			"Removed gem from normalization recipe"
		],
		collapsed: true
	},
	<IPatches>{
		date:'09/03/2020',
		changes: [
			"Fixed a problem with \"always magic belts, boots and gloves\"",
			"Added a normalization recipe -> Any equip (magic or higher) + id scroll = Normal equip + Gem"
		],
		collapsed: true
	},
	<IPatches>{
		date:'11/20/2019',
		changes: [
			"Fixed Mercenary's inventory background to only have one slot for ring (visual change)"
		],
		collapsed: true
	},
	<IPatches>{
		date:'07/19/2019',
		changes: [
			"Fixed some issues with gambling",
			"Default font updated"
		],
		collapsed: true
	},
	<IPatches>{
		date:'07/07/2019',
		changes: [
			"Updated dlls",
			"Added gamble refresh button",
			"Magic find is now linear, previously was affected by dimensioning return"
		],
		collapsed: true
	},
	<IPatches>{
		date:'04/21/2019',
		changes: [
			"Updated dlls"
		],
		collapsed: true
	},
	<IPatches>{
		date:'04/13/2019',
		changes: [
			"Fixed Skull Collector staff appearance",
			"Unique charms and gems no long have lvl re1quirements"
		],
		collapsed: true
	},
	<IPatches>{
		date:'04/09/2019',
		changes: [
			"Updated dlls",
			"Ctrl Left Click Item extened to Inventory, Stash, Cube & Ground Drop",
			"Shift Left Click belt-able item extended to Stash & Cube",
			"Increased drop rate of uber keys",
			"Increased effectiveness of Corpse Explosion",
			"Greatly increased quality of rune drop rate"
		],
		collapsed: true
	},
	<IPatches>{
		date:'04/04/2019',
		changes: [
			"Sorceress' elemental masteries level requirement now = 1"
		],
		collapsed: true
	},
	<IPatches>{
		date:'04/02/2019',
		changes: [
			"IMPORTANT: Backup save folder and delete mod's folder. Update and drop save folder back in mod",
			"Raised level of Nephilim Hunters on Normal",
			"Reduced Nephilim Hunters power, adjusted drop rates",
			"Uber Quest is now active",
			"Added shift+click functionality to put items in stash, cube, inventory",
			"5->3 runes required to upgrade"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/30/2019',
		changes: [
			"Added some unique items",
			"Reduced paladin's Vengeance skill mana cost",
			"Infinity can be assembled in polearms, spears, bows, crossbows, staffs, sheidls",
			"Added Nephilim Hunters in nonquest areas. Be careful",
			"All unique robes and cloaks now have a specific place of drop in addition to usual random drop",
			"Fixed some monsters spawns",
			"Added Frost Nova to act 3 merc",
			"Jameela shared her potions with Halbu",
			"Added FAQ in the archive"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/27/2019',
		changes: [
			"Reduced some amazon skills mana requirements",
			"Increased brightness in caves"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/23/2019',
		changes: [
			"Changed recipe of making time items - set/unique boots/gloves now replace superior",
			"Adjusted drop rate for some armor types",
			"Minor miscellaneous adjustments",
			"Updated system dlls"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/17/2019',
		changes: [
			"Increased monsters' density in non-quest areas",
			"New font moved to separate archive"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/11/2019',
		changes: [
			"Added full equipment for mercenaries (background has some work left to be done)"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/06/2019',
		changes: [
			"Reduced all novas' radius",
			"Changed mercs' stats - adjusted price, lvling faster, use only skills in fight",
			"Increased drop rate of gems",
			"Amazon's Dodge, Avoid, Evade now have 1 level, reset your skills"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/04/2019',
		changes: [
			"Updated system dlls"
		],
		collapsed: true
	},
	<IPatches>{
		date:'03/02/2019',
		changes: [
			"Robes/cloaks can be runeworded/gemworded",
			"All runewords/gemwords for melee weapons now have splash damage affix"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/26/2019',
		changes: [
			"Glacial Trail and Crystalline Passage swapped",
			"Added bright colored health bars for monsters",
			"Valuable items now more visible on ground"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/22/2019',
		changes: [
			"Increased drop rate of robes and cloaks",
			"Added 15 unique robes and cloaks"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/21/2019',
		changes: [
			"Added robes and cloaks",
			"Added armor in gamble",
			"Added a few more uniques",
			"Fixed some monster levels (was too high)",
			"All armor gemwords now emit light"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/12/2019',
		changes: [
			"Fixed damage of lightning based skills",
			"Duriel now has Fanaticism instead of Holy Freeze"
		],
		collapsed: true
	},
	<IPatches>{
		date:'02/11/2019',
		changes: [
			"Added a description of item type to each set item"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/29/2019',
		changes: [
		    "Fixed a crash in Bloody Foothills (act 5)"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/28/2019',
		changes: [
			"Better skillers (Grand chamrs with +skills)",
			"Unique and gems drop tweaks",
			"All sets buffed"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/25/2019',
		changes: [
			"Nova skill now have no synergies.",
			"Nova skill damage buffed.",
			"Static Field skill now have only 1 level.",
			"Increased damage for Teeth, Bone Spear, Bone Spirit, Poison Nova.",
			"Mercenaries' skills redone",
			"	Rogue Scout Fire - Dodge, Immolation Arrow, Blessed Aim, Exploding Arrow, Fire Arrow",
            "	Rogue Scout Ice - Dodge, Freezing Arrow, Blessed Aim, Ice Arrow, Cold Arrow",
            "	Rogue Scout Combat - Multiple Shot, Penetrate, Blessed Aim, Magic Arrow, Guided Arrow",
            "	Desert Mercenary Combat - Jab, Prayer, Pole Arm Mastery, Spear Mastery",
            "	Desert Mercenary Defensive - Jab, Defiance, Pole Arm Mastery, Spear Mastery",
            "	Desert Mercenary Offensive - Jab, Might, Pole Arm Mastery, Spear Mastery",
            "	Eastern Sorcerer Fire - Meteor, Fire Ball, Fire Bolt, Hydra, Fire Mastery, Resist Fire",
            "	Eastern Sorcerer Cold - Glacial Spike, Ice Bolt, Cold Mastery, Frozen Orb, Resist Cold",
            "	Eastern Sorcerer Lightning - Lightning Mastery, Chain Lightning, Lightning, Charged Bolt, Resist Lightning",
            "	Eastern Sorcerer Bone - Bone Spear, Bone Spirit, Teeth, Concentration",
            "	Barbarian - Bash, Concentrate, Battle Cry, Fanaticism, Sword Mastery",
            "	Barbarian - Bash, Berserk, Battle Cry, Thorns, Sword Mastery",
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/24/2019',
		changes: [
			"Magic/Rare items' affix changes",
			"Tiered durability of items",
			"Fixed some unique items"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/23/2019',
		changes: [
			"Fixed invincibility exploit",
			"Diversified every unique item",
			"Reworked some full set bonuses'"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/22/2019',
		changes: [
			"Fixed some on-hit skills not working for some unique and set items",
			"Updated gold autoloot and antibug .dlls"
		],
		collapsed: true
	},
	<IPatches>{
		date:'01/21/2019',
		changes: [
			"Added some missing affixes on items",
			"Fixed low level act 3 mercenaries",
			"Better gems quality from monster drops",
			"Changed gems and some runes",
			"Increased monsters' skill levels. BEWARE.",
			"Infinity runeword powered up to confront dark diablo"
		],
		collapsed: true
	},
    <IPatches>{
        date:'12/19/2018',
        changes: [
			"Rerolling magic and rare charms now require only 2 charms",
			"Transmuting magic charms to rare now requires only 3 charms",
			"Adding timeless skills on now increases level requirement by 6",
			"All types of weapons and armor are upgradeable now"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'12/09/2018',
        changes: [
			"Better affixes roll for magic and rare items",
			"Also more +skills on class specific times",
			"Font was replaced by better readable one"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'11/29/2018',
        changes: [
			"More techinical modifications, added new dll files"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'11/27/2018',
        changes: [
            '!!!WARNING!!! Take save folder from MODS->Glory of Nephilim (or MP) and put in safe place, after that delete Glory of Nephilim (or MP) folder. Next update mod as usual.',
            "Bypass 25 fps limit for single player activated",
			"Fix for Shadow Master - disappears much less",
			"Fix for Necromancer revives so they don't wander off",
			"HyperJoin - fast loading for multiplayer"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'11/24/2018',
        changes: [
			"Fixed Assassin's traps shots quantity description",
			"Reduced mana cost for all Assassin's traps",
			"Reduced radius of Hurricane skill (still whole screen but not wider)"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'11/19/2018',
        changes: [
			"Restored some of lost unique items' names",
			"Increased frequency of spawning splash affix on weapons.",
			"Increased monster level on all difficulties",
			"Light level changes",
			"/players X goes to 127 (up from 8)"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'11/17/2018',
        changes: [
			"Changed some uniques",
			"HP/mana leech reduced",
			"Fixed Increased Speed skill"
        ],
        collapsed: true
    },
    <IPatches>{
        date:'11/14/2018',
        changes: [
            '!!!WARNING!!! Take save folder from MODS->Glory of Nephilim (or MP) and put in safe place, after that delete Glory of Nephilim (or MP) folder. Next update mod as usual.',
            'Added splash damage affix to magic and rare melee weapons',
            'Unique and set melee weapons also have it but with 100% chance',
            'Fixed potion shops',
            'Max level increased to 125'
        ],
        collapsed: true
    },
	<IPatches> {
        date: '11/13/2018',
        changes: [
        	"Added auto-pickup gold",
			"Added \"100% hit change\" feature",
			"Added \"full protection while running\" feature",
			"Removed Ancients Level Up Experience Cap",
			"Removed Experience Penalty beyond 2 screens",
			"Remove monster lvl/character lvl difference of 10 Experience Penalty",
			"/nopickup option enabled by default",
			"Added UVlod title to thanks DevUrandom for coding that stuff"
        ],
		collapsed: true
	},
	<IPatches> {
		date: '11/06/2018',
		changes: [
			'Removed dodge-type oskills from items to avoid animation glitches. Replace by Iron Skin',
			'Various length tweaks for some skills (overall damage was not touched)'
		],
		collapsed: true
	},
    <IPatches>{
        date: '10/28/2018',
        changes: [
               "Fixed Thorns aura and Iron Maiden curse",
                "Removed self-repair from indestructible unique items",
                "Changed shop potions",
                "Fixed some skill descriptions ",
        ],
        collapsed:true
    },
	<IPatches>{
        date: '10/24/2018',
        changes: [
            "Changed low level summoning skills",
            "Afterlife and Arcane Shard jewels buffed",
            "Reduced Holy Bolt healing",
            "Reduced radius of Sanctuary Aura",
            "Reduced junk from from hell cows",
        ],
        collapsed:true
	},
    <IPatches>{
        date: '10/13/2018',
        changes: [
            "Mana Potions buffed.",
			"Changed Sorceress' Energy Shield",
			"Doubled bonuses from warped recipes",
			"Ormus Robes can now roll all Sorceress' skills",
			"Added heirloom sword and sash (uniques)"
        ],
        collapsed: true
    },
	<IPatches>{
		date: '10/09/2018',
		changes: [
		    "Reduced required experience after level 80",
			"Fixed various bugs with assassin skills"
		],
		collapsed: true
	},
	<IPatches>{
		date: '09/13/2018',
		changes: [
			"Fixed an issue with Barbarian hireling's Thorns aura",
			"Changed Blade Sentry, Blade Fury, Blade Shield mana cost",
			"Increase gold drop chance"
		],
		collapsed: true
	},
	<IPatches>{
		date: '08/28/2018',
        changes: [
        	"Removed/reduced cooldown on some skills"
        ],
		collapsed: true
	},
    <IPatches>{
        date: '08/23/2018',
        changes: [
            "Barbarian's Battle Command skill now has full power at level 1",
            "Berserk no longer has bonus from Battle Command,  bonus from Howl doubled to compensate",
            "Modified some unique items to reflect changes to skills"
		],
        collapsed: true
    },
    <IPatches>{
        date: '08/19/2018',
        changes: ["Most skills for ever class was changed - buffed, nerfed or rework.",
		"NOTE: Please respec your character(s) skills"],
        collapsed: true
    },
    <IPatches>{
        date: '08/17/2018',
        changes: ["Increased monster levels by 5 in Normal/Nightmare",
        "Necromancer summons move speed reduced",
        "Necormancer golem damage increased",
        "Druid summons damage increased",
        "Spirits and vines now have 90% damage reduction",
        "Rare rune drop chance doubled"],
        collapsed: true
    },
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
	selector: 'gon-patches',
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
