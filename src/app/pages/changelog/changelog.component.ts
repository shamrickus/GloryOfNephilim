import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

export interface IChange {
	name: string;
	href: string;
	changes: string[];
	subCat: IChange[];
	collapsed: boolean;
}
export const CHANGES = <IChange[]> [
	{
	collapsed: false,
	name: "General",
	href: "general",
	changes: ["Drop of valuable items improved about 10 times","All missiles speed is 150%","Increased level cap to 125","In Travincal added mob in honor of the creator of mod Battle for elements - True Mage (My favorite mod)","All belts have 4 rows of cells potions (with a visual bug), as well as a character without a belt at all (additional lines can not be opened, but they are used in the selection and purchase of potions)","New unique items", "Efficiency of hp and mana leech reduced", "Multiple minor changes of all skills", "Added gemwords (collected only from gems of the same type and quality)"],
	subCat: [ <IChange>{
		collapsed: false,
		name: "Difficulty Settings",
		href: "ds",
		changes: ["Commands /players X, where 1 <= X <= 127","Higher the number - stronger monsters","Default is 1" ]
	},
		<IChange>{
			collapsed: false,
			name: "PlugY 11.02 (Single Player Only)",
			href: "plugy",
			changes: ["/save : Save game without exit.","/page 4 : (beta) Show available runewords (stats page must be opened).","/swap page : Swap the content of current stash page with the content of another page.","/toggle page : Swap the content of current stash page with the content of another page in opposing stash shared/personal.","/dlm : Toggle always display mana and life mode.","/dml : Same as /dlm.","/dl : Toggle always display life mode.","/dm : Toggle always display mana mode.","/setmainindex : Set the current stash page as main index (shift + prev/next index button go to an main index if exists).","/resetindex : Remove index flag on the current stash page (prev/next index button go to this index if exists).","/setindex : Set the current stash page as index. (prev/next index button go to an index if exists)","/renamepage : Rename current page of stash.","/insertpage : Insert a new page after the current page.","/deletepage : Delete current page if empty.","/renamechar : Rename current character (map files will not be renamed).", "Current number of simulated players is saved with the player and set on game load"
			]
		},
		<IChange>{
			collapsed: false,
			name: "Respec",
			href: "respec",
			changes: ["SP -- To reset your skills you need to press the X next to the number of the remaining amount of skill points","SP -- To reset stats hold ALT and click on stat button","MP -- Transmute key in stash to get token of absolution",
			]
		},
		<IChange>{
			collapsed: false,
			name: "Map Changes",
			href: "map",
			changes: ["Entrance to Andariel is now in the Cold Plains","Parts of Horadric Staff are now in locations under the town (replaces Sewer entrance)","Entrance to Mephisto now in Spider Forest (next to waypoint)","Entrance to Baal now in Glacial Trail","Location Abaddon (red portal Frigid Highlands) - now there drops the best charms. Go there in HELL difficulty, use Conviction 12+ level or Lower Resist curse to pierce elemental immunities",
			]
		}
	]
},
	<IChange>{
		collapsed: false,
		name: "Mercenary",
		href: "merc",
		changes: ["Rogue Scout Fire - Dodge, Blessed Aim, Immolation Arrow, Exploding Arrow, Fire Arrow", "Rogue Scout Ice - Dodge, Blessed Aim, Freezing Arrow, Ice Arrow, Cold Arrow", "Rogue Scout Combat - Multiple Shot, Penetrate, Blessed Aim, Magic Arrow, Guided Arrow", "Desert Mercenary Combat - Jab, Prayer, Pole Arm Mastery, Spear Mastery", "Desert Mercenary Defensive - Jab, Defiance, Pole Arm Mastery, Spear Mastery", "Desert Mercenary Offensive - Jab, Might, Pole Arm Mastery, Spear Mastery", "Eastern Sorcerer Fire - Meteor, Fire Ball, Fire Bolt, Hydra, Fire Mastery, Resist Fire", "Eastern Sorcerer Cold - Glacial Spike, Ice Bolt, Cold Mastery, Frozen Orb, Resist Cold", "Eastern Sorcerer Lightning - Lightning Mastery, Chain Lightning, Lightning, Charged Bolt, Resist Lightning", "Eastern Sorcerer Bone - Bone Spear, Bone Spirit, Teeth, Concentration", "Barbarian - Bash, Concentrate, Battle Cry, Fanaticism, Sword Mastery", "Barbarian - Bash, Berserk, Battle Cry, Thorns, Sword Mastery"]

	},
	<IChange>{
		collapsed: false,
		name: "Runewords",
		href:"runewords",
		changes: ["All normal runewords are enabled","Ladder runewords are enabled","Insight can be assembled in staffs and halberds","Infinity can be assembled in halberds, spears and bows","Heart Of The Oak, Call to Arms and Spirit can be assembled in any weapon","Holy Tears (TalRalOrtThul - Helm)","Still Water (ZodCham - Shield)","Prayer (RalTalSolDol - Scepter)","Knight's Vigil (KoUm - Boots)","Innocence (ThulEl - Belt)","Peril (FalKo - Gloves)"
		]
	},
	<IChange>{
		collapsed: false,
		name: "Cube",
		href: "cube",
		changes: ["All recipes are disabled except for the following","Disenchant (DESTROYS) unique/set/warped/timeless (nonsocketed) item - Any Perfect Gem + item + White Potion = Jewels (Timeless/warped: 3, Set: 2, Unique: 1)","Token of Absolution (reset stats and skills) - transmute key","Aeon's Lesser Blessing - any soul dust + Jewel", "Aeon's Greater Blessing - Aeon's Lesser Blessing x4","Aeon's Greater Blessing - 4 different soul dusts + Jewel","Secret cow level - Wirt's Leg + Key","Rejuvenation Potion (x3) - Super Healing Potion + Super Mana Potion + Jewel","Full Rejuvenation Potion (x3) - Rejuvenation Potion + Golden Potion","Add replenish quantity to arrows and bolts - Magic or rare arrows or bolts + Key"
		],
		subCat: [
			<IChange>{
				collapsed: false,
				name:"Gem and Runes",
				href:"gr",
				changes:["3 same runes - 1 rune of higher quality","3 same gems - 1 gem of higher quality","Downgrade gems (or runes) into smaller - 1 gem (or rune) + White Potion","Any Perfect Gem x3 + Jewel + Chipped Ruby = Perfect Ruby x3","Any Perfect Gem x3 + Jewel + Chipped Diamod = Perfect Diamond x3","Any Perfect Gem x3 + Jewel + Chipped Saphire = Perfect Saphire x3","Any Perfect Gem x3 + Jewel + Chipped Topaz = Perfect Topaz x3","Any Perfect Gem x3 + Jewel + Chipped Emerald = Perfect Emerald x3","Any Perfect Gem x3 + Jewel + Chipped Amethyst = Perfect Amethyst x3","Any Perfect Gem x3 + Jewel + Chipped Skull = Perfect Skull x3"
				]
			},
			<IChange>{
				collapsed: false,
				name: "Changing Item",
				href: "change",
				changes :["Etherealization - Rune Zod x1 + Jewel + item","\"Normalize\" item - Any item (magic or higher) + id scroll = Normal item", "Add +1 to all skills - Rune Zod x3 + Jewel + item","Add self-repair - Rune Zod x2 + Jewel + item","Adding sockets -? Perfect Skull x (how much to socket) + Jewel + item (including rings and amulets) + Key	","Remove gems (or runes) from the socket - Perfect Skull + item + Key","Random unique Jewel - Jewel x4","Random unique Jewel - a unique Jewel + Jewel","Magic ring (or amulet) to rare - magic ring (or amulet) x3","Magic Charm to rare - magic Charm (of the same size) x3 + Jewel","Reroll class item (or Circlet) - class item (or Circlet) + Jewel x1","Reroll Ormus 'Robe - Ormus' Robe + Jewel","Reroll magic (or rare) rings (or amulets) - magic (or rare) ring (or amulet) x2","Reroll magic (or rare) Charms - magic (or rare) charm x 2 + Jewel","Rerolling rings, amulets and charms depends only from character level. Item level of output item is 75% of current character level. Rerolling class items and circlets always gives 99 item level output."]
			},
			<IChange>{
				collapsed: false,
				name: "Warped item",
				href:"warped",
				changes: ["Make item warped - Unique/set ring/amulet + Any Perfect Gem x3 + Jewel x3 + Golden Potion", "Cold resist +4% (+1 level req) - warped item + blank runestone + Jewel + Perfect Saphire","Fire resist +4% (+1 level req) - warped item + blank runestone + Jewel + Perfect Ruby","Lightning resist +4% (+1 level req) - warped item + blank runestone + Jewel + Perfect Topaz","Poison resist +4% (+1 level req) - warped item + blank runestone + Jewel + Perfect Emerald","Cold pierce +2% (+3 level req) - warped item + blank runestone x2 + Jewel + Perfect Saphire","Fire pierce +2% (+3 level req) - warped item + blank runestone x2 + Jewel + Perfect Ruby","Lightning pierce +2% (+3 level req) - warped item + blank runestone x2 + Jewel + Perfect Topaz","Poison pierce +2% (+3 level req) - warped item + blank runestone x2 + Jewel + Perfect Emerald","Life +4% and mana +2% steal (+1 level req) - warped item + blank runestone + Jewel + Perfect Skull","Physic damage min and max +5 (+1 level req) - warped item + blank runestone + Jewel + Perfect Amethyst","Magic damage +5 (+1 level req) - warped item + blank runestone + Jewel + Perfect Diamond","Damage to undead and demons +4% (+1 level req) - warped item + blank runestone + Jewel + Pul Rune","Health +10 and mana +5 (+1 level req) - warped item + blank runestone + Jewel + Full Rejuvenation Potion (MEGA)","Magic find +4% and gold find +6% (+1 level req) - warped item + blank runestone + Jewel + Lem Rune","Additional expirience +2% (+2 level req) - warped item + blank runestone + Jewel + Um Rune","Level req reduce (-50 level req) - warped item + blank runestone + Jewel + Zod Rune",
				]
			},
			<IChange> {
				name:"Timeless Item",
				href:"timeless",
				changes: ["Looped Time Fragment - Warped Rune x3 + Golden Potion","Make item Timeless - Unique/set nonsocketed gloves or boots + Looped Time Fragment + Jewel","Add skill on Timeless item (+3 lvl req) - Timeless item + Perfect Gem (depends on class) + Jewel x3 + Key x? (depends on skill) + Looped Time Fragment",
					"Class only skills limit to 7, oskills limited only by your level. oskills for native classes will be reduced to 3. Skill properties increase level requirements by 6"
				],
				subCat: [
					<IChange>{
						collapsed: false,
						name: "Amazon - Topaz",
						href: "Amazon",
						changes: ["1 Magic Arrow","2 Fire Arrow","3 Inner Sight","4 Critical Strike","5 Jab","6 Cold Arrow","7 Multiple Shot","8 Dodge","9 Power Strike","10 Poison Javelin<","11 Exploding Arrow","12 Slow Missiles","13 Avoname","14 Impale","15 Lightning Bolt","16 Ice Arrow","17 Guided Arrow","18 Penetrate","19 Charged Strike","20 Plague Javelin","21 Strafe","22 Immolation Arrow","23 Decoy","24 Evade","25 Fend","26 Freezing Arrow","27 Valkyrie","28 Pierce","29 Lightning Strike","30 Lightning Fury"
						]
					},
					<IChange>{
						collapsed: false,
						name: "Sorceress - Sapphire",
						href: "Sorceress",
						changes: ["1 Fire Bolt","2 Warmth","3 Charged Bolt","4 Ice Bolt","5 Frozen Armor","6 Inferno","7 Static Field","8 Telekinesis","9 Frost Nova","10 Ice Blast","11 Blaze","12 Fire Ball","13 Nova","14 Lightning","15 Shiver Armor","16 Fire Wall","17 Enchant","18 Chain Lightning","19 Teleport","20 Glacial Spike","21 Meteor","22 Thunder Storm","23 Energy Shield","24 Blizzard","25 Chilling Armor","26 Fire Mastery","27 Hydra","28 Lightning Mastery","29 Frozen Orb","30 Cold Mastery"
						]
					},
					<IChange>{
						collapsed: false,
						name: "Necromancer - Skull",
						href: "Necromancer",
						changes: ["1 Amplify Damage","2 Teeth","3 Bone Armor","4 Skeleton Mastery","5 Raise Skeleton","6 Dim Vision","7 Weaken","8 Poison Dagger","9 Corpse Explosion","10 Clay Golem","11 Iron Manameen","12 Terror","13 Bone Wall","14 Golem Mastery","15 Raise Skeletal Mage","16 Confuse","17 Life Tap","18 Poison Explosion","19 Bone Spear","20 BloodGolem","21 Attract","22 Decrepify","23 Bone Prison","24Summon Resist","25 IronGolem","26 Lower Resist","27 Poison Nova","28Bone Spirit","29 FireGolem","30 Revive"
						]
					},
					<IChange>{
						collapsed: false,
						name: "Paladin - Diamond",
						href: "Paladin",
						changes: ["1 Sacrifice","2 Smite","3 Might","4 Prayer","5 Resist Fire","6 Holy Bolt","7 Holy Fire","8 Thorns","9 Defiance","10 Resist Cold","11 Zeal","12 Charge","13 Blessed Aim","14 Cleansing","15 Resist Lightning","16 Vengeance","17 Blessed Hammer","18 Concentration","19 Holy Freeze","20 Vigor","21 Conversion","22 Holy Shield","23 Holy Shock","24 Sanctuary","25 Meditation","26 Fist of the Heavens","27 Fanaticism","28 Conviction","29 Redemption","30 Salvation"
						]
					},
					<IChange>{
						collapsed: false,
						name: "Barbarian - Ruby",
						href: "Barbarian",
						changes: ["1 Bash","2 Sword Mastery","3 Axe Mastery","4 Mace Mastery","5 Howl","6 Find Potion","7 Leap","8 Double Swing","9 Pole Arm Mastery","10 Throwing Mastery","11 Spear Mastery","12 Taunt","13 Shout","14 Stun","15 Double Throw","16 Increased Stamina","17 Find Item","18 Leap Attack","19 Concentrate","20 Iron Skin","21 Battle Cry","22 Frenzy","23 Increased Speed","24 Battle Orders","25 Grim Ward","26 Whirlwind","27 Berserk","28 Natural Resistance","29 War Cry","30 Battle Command"
						]
					},
					<IChange>{
						collapsed: false,
						name: "Druid - Emerald",
						href: "Druid",
						changes: ["1 Raven","2 Poison Creeper","3 Werewolf","4 Shape Shifting","5 Firestorm","6 Oak Sage","7 Summon Spirit Wolf","8 Werebear","9 Molten Boulder","10 Arctic Blast","11 Cycle of Life","12 Feral Rage","13 Maul","14 Eruption","15 Cyclone Armor","16 Heart of Wolverine","17 Summon Dire Wolf","18 Rabies","19 Fire Claws","20 Twister","21 Vines","22 Hunger","23 Shock Wave","24 Volcano","25 Tornado","26 Spirit of Barbs","27 Summon Grizzly","28 Fury","29 Armageddon","30 Hurricane"
						]
					},
					<IChange>{
						collapsed: false,
						name: "Assassin - Amethyst",
						href: "Assassin",
						changes: ["1 Fire Blast","2 Claw Mastery","3 Psychic Hammer","4 Tiger Strike","5 Dragon Talon","6 Shock Field","7 Blade Sentinel","8 Burst of Speed","9 Fists of Fire","10 Dragon Claw","11 Charged Bolt Sentry","12 Wake of Fire Sentry","13 Weapon Block","14 Cloak of Shadows","15 Cobra Strike","16 Blade Fury","17 Fade","18 Shadow Warrior","19 Claws of Thunder","20 Dragon Tail","21 Lightning Sentry","22 Inferno Sentry","23 Mind Blast","24 Blades of Ice","25 Dragon Flight","26 Death Sentry","27 Blade Shield","28 Venom","29 Shadow Master","30 Phoenix Strike"
						]
					}
				]
			}
		]
	},
];

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
  changes: IChange[];
  private focus: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
      this.changes = CHANGES;
      this.route.params.subscribe(params => {
          if(params["id"] != null){
              this.focus = params["id"];
              this.scroll();
          }
      });
  }

    update(href: string) {
      this.router.navigate(["changelog", href]);
    }

  scroll() {
      let section: HTMLElement;
      setTimeout(() => {
          section = document.getElementById(this.focus);
          section.scrollIntoView();

          if(section == null)
              scroll();
      }, 50);
  }


}
