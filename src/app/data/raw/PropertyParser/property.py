import csv
import urllib.request
import os

import PropertyParser
from utils import headerParse


class Property:
    def generateRange(self, append=""):
        self.min = 0
        self.max = 0
        self.par = 0
        self.prop = ""
        self.parsed = ""
        if (self.min == self.max):
            return self.min + append
        return "{}-{}{}".format(self.min, self.max, append)

    def __str__(self):
        return ("prop: {}, par: {}, min: {}, max: {}, parsed: {}".format(self.prop, self.par, self.min, self.max, self.parsed))

    def json(self):
        return "{" + "\"prop\":\"{}\",\"par\":\"{}\",\"min\":\"{}\",\"max\":\"{}\",\"parsed\":\"{}\"".format(self.prop, self.par, self.min, self.max, self.parsed) + "}"

    def __init__(self, prop, par, min, max):
        if (prop is None or prop == ""):
            self.prop = None
            return
        self.parsed = ""
        self.prop = prop
        self.par = par
        self.min = min
        self.max = max

    def equiv(self, prop):
        return self.prop == prop.prop and \
            self.par == prop.par

    def add(self, prop):
        self.min = str(int(self.min) + int(prop.min))
        self.max = str(int(self.max) + int(prop.max))
        PropertyParser.parse([self])



class ParseAggregate:
    def __init__(self, items, itemClass):
        self.items = items
        self.cls = itemClass

    def parse(self, runes):
        for item in self.items:
            itemRunes = [r for r in runes if r.name() in item.runes]
            for itype in item.itypes:
                if itype.isShield():
                    type = "Shield"
                elif itype.isWeapon():
                    type = "Weapon"
                elif itype.isArmor():
                    type = "Armor"

            for rune in itemRunes:
                for runeProp in rune._props[type]:
                    item.add(runeProp)

    def writeJSON(self):
        with open(os.getcwd() + self.cls.getName().replace("csv", "ts"), "w") as file:
            file.write("[")
            for item in self.items:
                file.write(item.json() + ",")
            file.write("];")

class BaseParser:
    def __init__(self, line):
        self.raw = {}
        for prop in line:
            self.raw[headerParse(prop)] = line[prop]

    @staticmethod
    def getName():
        return "ERROR"

    def verify(self):
        return True

    def json(self):
        return "ERROR"

    @staticmethod
    def read(cls, dl=False):
        items = []
        with open(os.getcwd() + "\\" + cls.getName(), 'r') as file:
            reader = csv.DictReader(file)
            for line in reader:
                item = cls(line)
                item.parse()
                if(item.verify()):
                    items.append(item)
                    if(dl):
                        BaseParser.Download(item)
                else:
                    print("bad ({})".format(item.name) + str(item))
        return items

    @staticmethod
    def Download(cls):
        name = cls.fileName()
        url = "http://classic.battle.net/images/battle/diablo2exp/images/{}".format(name) + "/{}.gif"
        gemName = cls.Name().replace(" ", "")
        nurl = url.format(gemName)
        try:
            try:
                os.mkdir('Images\\{}'.format(name))
            except:
                pass
            imgName = 'Images\\{}\\{}.gif'.format(name, cls.FileName())
            urllib.request.urlretrieve(nurl, imgName)
            cls.img = imgName
        except Exception:
            print("Unable to parse {} url {}".format(gemName, nurl))


class PropertyParse(BaseParser):
    def __init__(self, line):
        self.code = ""
        BaseParser.__init__(self, line)

    def parse(self):
        self.code = self.raw["code"]

    @staticmethod
    def getName():
        return "properties.csv"
