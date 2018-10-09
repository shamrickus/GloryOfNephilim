import os, csv, re
import sys


class Property:
    def generateRange(self, append=""):
        if (self.min == self.max):
            return self.min + append
        return "{}-{}{}".format(self.min, self.max, append)

    def __str__(self):
        return ("prop: {}, par: {}, min: {}, max: {}".format(self.prop, self.par, self.min, self.max))

    def __init__(self, prop, par, min, max):
        if (prop is None or prop == ""):
            self.prop = None
            return
        self.prop = prop
        self.par = par
        self.min = min
        self.max = max


class Item:
    _item = {}
    _props = []
    _ilvl = 0
    _lvlreq = 0
    _name = ""
    _invPicture = ""

    def __init__(self, pLineItem):
        for prop in pLineItem:
            val = pLineItem[prop]
            self._item[prop] = val

    def parse(self):
        self._lvlreq = self._item["lvl req"]
        self._ilvl = self._item["lvl"]
        self._name = self._item["index"]
        self._invPicture = self._item["invfile"]
        self._type = self._item["*type"]
        print(self._name)
        for x in range(1, 12):
            prop = Property(self._item["prop" + str(x)], self._item["par" + str(x)], self._item["min" + str(x)], self._item["max" + str(x)])
            if prop.prop is None:
                continue
            self._props.append(prop)
        ItemPropertyParser.parse(self._props)


class ItemPropertyParser:
    @staticmethod
    def parse(properties):
        for self in properties:
            parsed = None
            minMax = re.compile("[A-Za-z]+\-(min|max)")
            dmg = re.compile("dmg\-[a-z]+")
            if self.prop is None:
                print("cant")
            elif self.prop == "dmg%":
                parsed = "{} Enhanced Damage".format(self.generateRange("%"))
            elif re.match(minMax, self.prop):
                parsed = self.generateRange()
            elif re.match(dmg, self.prop):
                ret = "Adds {}".format(self.generateRange())
                if (self.prop == "dmg-ltng"):
                    ret += "Lightning"
                elif (self.prop == "dmg-cold"):
                    ret += "Cold"
                elif (self.prop == "dmg-fire"):
                    ret += "Fire"
                elif (self.prop == "dmg-pois"):
                    ret += "Poison"
                elif (self.prop == "dmg-mag"):
                    ret += "Magic"
                elif (self.prop == "dmg-norm"):
                    ret
                else:
                    print(self.prop)
                    sys.exit()
                parsed = ret + " Damage"
            elif self.prop == "res-all":
                parsed = "All Resistances +{}".format(self.generateRange())
            elif self.prop == "aura":
                parsed = "Level {} {} Aura When Equipped".format(self.generateRange(), self.par)
            elif self.prop == "swing2":
                parsed = "{} Increased Attack Speed".format(self.generateRange("%"))
            elif self.prop == "all-stats":
                parsed = "+{} To All Attributes".format(self.generateRange())
            elif self.prop == "light":
                parsed = "+{} To Light Radius".format(self.generateRange())
            elif self.prop == "allskills":
                parsed = "+{} To All Skills".format(self.generateRange())
            elif self.prop == "":
                parsed = ""
            elif self.prop == "hit-skill":
                parsed = "{}% Chance To Cast Level {} {} On Striking".format(self.min, self.max, self.par)
            elif self.prop == "gethit-skill":
                parsed = "{}% Chance To Cast Level {} {} When Struck".format(self.min, self.max, self.par)
            elif self.prop == "oskill":
                parsed = "+{} To {}".format(self.generateRange(), self.par)
            elif self.prop == "ethereal":
                parsed = "Ethereal"
            elif self.prop == "indestruct":
                parsed = "Indestructible"
            elif self.prop == "mana/lvl":
                val = int(self.par) / 8
                parsed = "+{}-{} To Mana (Based On Character Level)".format(val, val * 111)
            elif self.prop == "regen-mana":
                parsed = "Regenerate Mana {}".format(self.generateRange("%"))
            elif self.prop == "mana%":
                parsed = "Increase Maximum Mana {}".format(self.generateRange("%"))
            elif self.prop == "cast3":
                parsed = "{} Faster Cast Rate".format(self.generateRange("%"))
            elif self.prop == "hp" or self.prop == "mana":
                print("Idk fix me")
            elif self.prop == "mag%":
                parsed = "{} Better Chance of Getting Magic Items".format(self.generateRange("%"))
            elif self.prop == "red-dmg%":
                parsed = "Damage Reduced By {}".format(self.generateRange("%"))
            elif self.prop == "str":
                parsed = "+{} to Strength".format(self.generateRange())
            elif self.prop == "dex":
                parsed = "+{} to Dexterity".format(self.generateRange())
            elif self.prop == "enr":
                parsed = "+{} to Energy".format(self.generateRange())
            elif self.prop == "vit":
                parsed = "+{} to Vitality".format(self.generateRange())
            elif self.prop == "ac":
                parsed = "+{} Defense".format(self.generateRange())
            elif self.prop == "ac%":
                parsed = "+{} Enhanced Defense".format(self.generateRange())
            elif self.prop == "hp%":
                parsed = "Increase Maximum Life {}".format(self.generateRange("%"))
            elif self.prop == "att%":
                parsed = "{} Bonus To Attack Rating".format(self.generateRange("%"))
            else:
                print("Unable to parse " + str(self))
                sys.exit()
            print(parsed)

    @staticmethod
    def generateRange(self, append=""):
        if (self.min == self.max):
            return self.min + append
        return "{}-{}{}".format(self.min, self.max, append)


asdf = 0

Items = []
with open(os.getcwd() + "\\uniqueitems.csv", 'r') as inFile:
    reader = csv.DictReader(inFile)
    for line in reader:
        item = Item(line)
        item.parse()
        Items.append(item)

        if asdf > 10:
            break
        asdf += 1
