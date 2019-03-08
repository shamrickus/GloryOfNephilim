import re

import sys

skills = []
definedProperties = []
monsters = []
def parseSkill(property):
    global skills
    getSkill = (lambda x: [skill for skill in skills if skill.id == x.par])
    skill = getSkill(property)
    if skill == []:
        getSkill = (lambda x: [skill for skill in skills if skill.skill == property.par])
        skill = getSkill(property)

    if property.prop == "skill":
        if(len(skill)):
            skill = skill[0]
            #TODO
            return "+{} to {} ({} Only)".format(generateRange(property), skill.skill, skill.char)
        else:
            return "+{} to {} (Class Only)".format(generateRange(property), property.par)
    elif property.prop == "att-skill":
        return "{}% Chance To Cast Level {} {} On Attack".format(property.min, property.max, property.par)
    elif property.prop == "oskill":
        if(len(skill)):
            skill = skill[0]
        return "+{} to {}".format(generateRange(property), skill.skill)
        #return "Level {} {} ({} Charges)".format(int(int(property.min)/3), skill.skill, property.max)
    elif property.prop == "kill-skill":
        when = "Kill An Enemy"
    elif property.prop == "levelup-skill":
        when = "Level-Up"
    elif property.prop == "death-skill":
        when = "Die"
    else:
        sys.exit()
    return "{}% Chance To Cast Level {} {} When you {}".format(property.min, property.max, property.par, when)

def parseReanimate(property):
    global mosnters
    getMonster = (lambda x: [mon for mon in monsters if mon.id == x.par])
    if property.prop == "reanimate":
       monster = getMonster(property)[0]
       return "{} Reanimate As: {}".format(generateRange(property, "%"), monster)
    else:
        sys.exit()

def validateProperty(property):
    global definedProperties
    getProp = (lambda x: [prop for prop in definedProperties if prop.code == x.prop])
    prop = getProp(property)
    if len(prop) != 1:
        sys.exit()

def parse(properties):
    for k, property in enumerate(properties):
        parsed = None
        minMax = re.compile("[A-Za-z]+\-(min|max)")
        dmg = re.compile("dmg\-[a-z]+")
        pierce = re.compile('pierce\-[A-Za-z]+')
        res = re.compile('res\-[A-Za-z]+')
        resLen = re.compile('res\-[A-Za-z]+\-len')
        abs = re.compile('abs\-[A-Za-z]+')
        red = re.compile('red\-[A-Za-z]+')
        extra = re.compile('extra\-[A-Za-z]+')
        validateProperty(property)
        if property.prop is None:
            print("cant")
        elif property.prop == "dmg":
            parsed = "{} Damage".format(generateRange(property))
        elif property.prop == "dmg%":
            parsed = "{} Enhanced Damage".format(generateRange(property, "%"))
        elif re.match(red, property.prop):
            ret = "{}Damage Reduced By {}"
            if property.prop == "red-mag":
                type = "Magic "
            else:
                type = ""
            parsed = ret.format(type, generateRange(property))
        elif re.match(minMax, property.prop):
            if(property.prop.endswith("max")):
                type = "Maximum"
            elif(property.prop.endswith("min")):
                type = "Minimum"
            parsed = "+{} To {} Damage".format(generateRange(property), type)
        elif re.match(abs, property.prop):
            if (property.prop.startswith("abs-ltng")):
                type = "Lightning"
            elif (property.prop.startswith("abs-cold")):
                type = "Cold"
            elif (property.prop.startswith("abs-fire")):
                type = "Fire"
            elif (property.prop.startswith("abs-pois")):
                type = "Poison"
            elif property.prop.startswith("abs-mag"):
                type = "Magic"
            else:
                sys.exit()
            parsed = "{} Absorb +{}".format(type, generateRange(property, "%"))
        elif re.match(resLen, property.prop):
            if property.prop == "res-pois-len":
                parsed = "Poison Length Reduced by {}".format(generateRange(property, "%"))
            else:
                sys.exit()
        elif re.match(res, property.prop):
            if property.prop == "res-all":
                parsed = "All Resistances +{}".format(generateRange(property))
            else:
                if (property.prop == "res-ltng"):
                    type = "Lightning"
                elif (property.prop == "res-cold"):
                    type = "Cold"
                elif (property.prop == "res-fire"):
                    type = "Fire"
                elif (property.prop == "res-pois"):
                    type = "Poison"
                elif property.prop == "res-mag":
                    type = "Magic"
                elif (property.prop == "res-ltng-max"):
                    type = "Maximum Lightning"
                elif (property.prop == "res-cold-max"):
                    type = "Maximum Cold"
                elif (property.prop == "res-fire-max"):
                    type = "Maximum Fire"
                elif (property.prop == "res-pois-max"):
                    type = "Maximum Poison"
                elif property.prop == "res-all-max":
                    type = "Maximum Poison/Fire/Cold/Lightning"
                else:
                    print(property.prop)
                    sys.exit(0)
                parsed = "{} Resistance +{}".format(type, generateRange(property, "%"))
        elif re.match(pierce, property.prop):
            if (property.prop == "pierce-ltng"):
                type = "Lightning"
            elif (property.prop == "pierce-cold"):
                type = "Cold"
            elif (property.prop == "pierce-fire"):
                type = "Fire"
            elif (property.prop == "pierce-pois"):
                type = "Poison"
            parsed = "-{} To Enemy {} Resistance".format(generateRange(property, "%"), type)
        elif re.match(dmg, property.prop):
            if(property.prop == "dmg-undead"):
                parsed = "+{} Damage To Undead".format(generateRange(property, "%"))
            elif(property.prop == "dmg-demon"):
                parsed = "+{} Damage To Demons".format(generateRange(property, "%"))
            elif(property.prop == "dmg-dem/lvl"):
                parsed = "+{} Damage To Demons (Based On Character Level)".format(generateRange(property, "%"))
            elif property.prop == "dmg-to-mana":
                parsed = "{} Damage Taken Goes to Mana".format(generateRange(property, "%"))
            else:
                if (property.prop == "dmg-ac"):
                    parsed = "{} To Monster Defense Per Hit".format(generateRange(property))
                elif property.prop == "dmg-elem":
                    parsed = "+{} Fire/Cold/Lightning Damage".format(generateRange(property))
                else:
                    ret = "Adds " + generateRange(property)
                    if (property.prop == "dmg-ltng"):
                        ret += "Lightning"
                    elif (property.prop == "dmg-cold"):
                        ret += "Cold"
                    elif (property.prop == "dmg-fire"):
                        ret += "Fire"
                    elif (property.prop == "dmg-pois"):
                        ret += "Poison"
                    elif (property.prop == "dmg-mag"):
                        ret += "Magic"
                    elif (property.prop == "dmg-norm"):
                        ret
                    else:
                        print(property.prop)
                        sys.exit()
                    parsed = ret  + " Damage"
        elif re.match(extra, property.prop):
            if property.prop == "extra-pois":
                type = "Poison"
            elif property.prop == "extra-cold":
                type = "Cold"
            elif property.prop == "extra-fire":
                type = "Fire"
            elif property.prop == "extra-ltng":
                type = "Lightning"
            parsed = "+{} To {} Skill Damage".format(generateRange(property), type)

        elif property.prop in ["skill", "kill-skill", "levelup-skill", "death-skill", "att-skill", "oskill"]:
            parsed = parseSkill(property)
        elif property.prop == "reanimate":
            parseReanimate(property)
        elif property.prop == "fireskill":
            parsed = "+{} To Fire Skills".format(generateRange(property))
        elif property.prop == "skilltab":
            parsed = "+{} To Skill Tab {} (TODO)".format(generateRange(property), property.par)
        elif property.prop in ["sor", 'nec', 'bar', 'pal', 'ass', 'dru', 'ama']:
            #TODO
            parsed = "+{} To Char skill".format(generateRange(property))
        elif property.prop == "res-all":
            parsed = "All Resistances +{}".format(generateRange(property))
        elif property.prop == "aura":
            parsed = "Level {} {} Aura When Equipped".format(generateRange(property), property.par)
        elif property.prop in ["swing1","swing2","swing3"]:
            parsed = "{} Increased Attack Speed".format(generateRange(property, "%"))
        elif property.prop == "all-stats":
            parsed = "+{} To All Attributes".format(generateRange(property))
        elif property.prop == "light":
            parsed = "+{} To Light Radius".format(generateRange(property))
        elif property.prop == "stupidity":
            parsed = "Hit Blinds Target"
        elif property.prop == "allskills":
            parsed = "+{} To All Skills".format(generateRange(property))
        elif property.prop == "":
            parsed = ""
        elif property.prop == "balance2":
            parsed = "+{} Faster Hit Recovery".format(generateRange(property, "%"))
        elif property.prop == "balance3":
            parsed = "+{} Faster Hit Recovery".format(generateRange(property, "%"))
        elif property.prop == "hit-skill":
            parsed = "{}% Chance To Cast Level {} {} On Striking".format(min, max, property.par)
        elif property.prop == "gethit-skill":
            parsed = "{}% Chance To Cast Level {} {} When Struck".format(min, max, property.par)
        elif property.prop == "ethereal":
            parsed = "Ethereal"
        elif property.prop == "indestruct":
            parsed = "Indestructible"
        elif property.prop == "rep-dur":
            parsed = "Repairs Durability {} in 4 Seconds".format(property.par)
        elif property.prop == "knock":
            parsed = "Knockback"
        elif property.prop == "mana/lvl":
            val = int(property.par) / 8
            parsed = "+{}-{} To Mana (Based On Character Level)".format(val, val * 111)
        elif property.prop == "regen-mana":
            parsed = "Regenerate Mana {}".format(generateRange(property, "%"))
        elif property.prop == "mana%":
            parsed = "Increase Maximum Mana {}".format(generateRange(property, "%"))
        elif property.prop == "cast2":
            parsed = "{} Faster Cast Rate".format(generateRange(property, "%"))
        elif property.prop == "cast3":
            parsed = "{} Faster Cast Rate".format(generateRange(property, "%"))
        elif property.prop == "hp" or property.prop == "mana":
            if property.prop == "hp":
                type = "Life"
            else:
                type = "Mana"
            parsed = "+{} To {}".format(generateRange(property), type)
        elif property.prop == "hp/lvl":
            parsed = "+{} To Life (Based on Character Level)".format(generateRange(property))
        elif property.prop == "explosivearrow":
            parsed = "FIres Explosive Arrows or Bolts ({})".format(generateRange(property))
        elif property.prop == "cheap":
            parsed = "Reduces All Vendor Prices {}".format(generateRange(property, "%"))
        elif property.prop == "mag%":
            parsed = "{} Better Chance of Getting Magic Items".format(generateRange(property, "%"))
        elif property.prop == "mag%/lvl":
            parsed = "+{} Better Chance of Getting Magical Items (Based On Character Level)".format(generateRange(property))
        elif property.prop == "red-dmg%":
            parsed = "Damage Reduced By {}".format(generateRange(property, "%"))
        elif property.prop == "str":
            parsed = "+{} to Strength".format(generateRange(property))
        elif property.prop == "str/lvl":
            parsed = "+{} To Strength (Based On Character Level)".format(property)
        elif property.prop == "dex":
            parsed = "+{} to Dexterity".format(generateRange(property))
        elif property.prop == "enr":
            parsed = "+{} to Energy".format(generateRange(property))
        elif property.prop == "vit":
            parsed = "+{} to Vitality".format(generateRange(property))
        elif property.prop == "vit/lvl":
            parsed = "vit/lvl"
        elif property.prop == "slow":
            parsed = "Slows Target By {}".format(generateRange(property, "%"))
        elif property.prop == "ac":
            parsed = "+{} Defense".format(generateRange(property))
        elif property.prop == "ac/lvl":
            if(property.min == "" or property.max == ""):
                property.min = property.par
                property.max = property.par
            property.min=str(int(int(property.min)/8))
            property.max=str(int(int(property.max)/8))
            parsed = "+{} To Defense (Based On Character Level)".format(generateRange(property))
        elif property.prop == "ac%":
            parsed = "+{} Enhanced Defense".format(generateRange(property, "%"))
        elif property.prop == "ac-miss":
            parsed = "+{} Defense Vs. Missle".format(generateRange(property))
        elif property.prop == "ignore-ac":
            parsed = "Ignores Target's Defense"
        elif property.prop == "reduce-ac":
            parsed = "-{} Target Defense".format(generateRange(property,  "%"))
        elif property.prop == "hp%":
            parsed = "Increase Maximum Life {}".format(generateRange(property, "%"))
        elif property.prop == "att%":
            parsed = "{} Bonus To Attack Rating".format(generateRange(property, "%"))
        elif property.prop == "att":
            parsed = "+{} To Attack Rating".format(generateRange(property))
        elif property.prop == "att-undead":
            parsed = "+{} To Attack Rating Against Undead".format(generateRange(property))
        elif property.prop == "att-demon":
            parsed = "+{} Damage to Demons".format(generateRange(property, "%"))
        elif property.prop == "demon-heal":
            parsed = "+{} Life After Each Demon Kill".format(generateRange(property))
        elif property.prop == "noheal":
            parsed = "Prevent Monster Heal"
        elif property.prop == "heal-kill":
            parsed = "+{} Life After Each Kill".format(generateRange(property))
        elif property.prop == "ease":
            parsed = "Requirements {}".format(generateRange(property, "%"))
        elif property.prop == "nofreeze":
            parsed = "Cannot be Frozen"
        elif property.prop == "freeze":
            parsed = "Freezes Target +{}".format(generateRange(property))
        elif property.prop == "half-freeze":
            parsed = "Half Freeze Duration"
        elif property.prop == "block2":
            parsed = "+{} Faster Block Rate".format(generateRange(property, "%"))
        elif property.prop == "block":
            parsed = "{} Increased Chance of Blocking".format(generateRange(property, "%"))
        elif property.prop == "howl":
            parsed = "Hit Causes Monster to Flee {}".format(generateRange(property, "%"))
        elif property.prop == "gold%":
            parsed = "{} Extra Gold From Monsters".format(generateRange(property, "%"))
        elif property.prop == "gold%/lvl":
            parsed = "{} Extra Gold From Monsters (Based on Character Level)".format(generateRange(property, "%"))
        elif property.prop == "manasteal":
            parsed = "{} Mana Stolen Per Hit".format(generateRange(property, "%"))
        elif property.prop == "lifesteal":
            parsed = "{} Life Stolen Per Hit".format(generateRange(property, "%"))
        elif property.prop == "deadly":
            parsed = "{} Deadly Strike".format(generateRange(property, "%"))
        elif property.prop == "deadly/lvl":
            parsed = "+{} Deadly Strike (Based on Character Level)".format(generateRange(property))
        elif property.prop == "regen":
            parsed = "Replenish Life {}".format(generateRange(property))
        elif property.prop == "regen-mana":
            parsed = "Regenerate Mana {}".format(generateRange(property, "%"))
        elif property.prop == "mana-kill":
            parsed = "+{} to Mana After Each Kill".format(generateRange(property))
        elif property.prop == "openwounds":
            parsed = "{} Chance of Open Wounds".format(generateRange(property, "%"))
        elif property.prop == "crush":
            parsed = "{} Chance of Crushing Blow".format(generateRange(property, "%"))
        elif property.prop == "thorns":
            parsed = "Attacker Takes Damage of {}".format(generateRange(property))
        elif property.prop == "rip":
            parsed = "Slain Monsters Rest in Peace"
        elif property.prop == "move2":
            "{} Faster Run Walk".format(generateRange(property, "%"))
        elif property.prop == "move3":
            "{} Faster Run Walk".format(generateRange(property, "%"))
        else:
            print("Unable to parse " + str(property))
            sys.exit()
        property.parsed = parsed
        properties[k] = property
    return properties

def generateRange(prop, append=""):
    if (prop.min == prop.max):
        return prop.min + append
    return "{}-{}{}".format(prop.min, prop.max, append)


def setSkills(skill):
    global skills
    skills = skill

def setMonsters(mon):
    global monsters
    monsters = mon

def setValidProperties(properties):
    global definedProperties
    definedProperties = properties
