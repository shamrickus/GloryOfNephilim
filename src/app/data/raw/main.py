import os, csv, re, json
import sys

import PropertyParser
from gems import Socketable
from itemTypes import ItemType
from skills import Skill
from runeword import Runeword
from monstat import MonStat
from PropertyParser.property import Property, BaseParser, PropertyParse, ParseAggregate


class Item:
    def __init__(self, pLineItem):
        self._item = {}
        self._props = []
        self._ilvl = 0
        self._lvlreq = 0
        self._name = ""
        self._invPicture = ""
        for prop in pLineItem:
            val = pLineItem[prop]
            self._item[prop] = val

    def parse(self):
        self._lvlreq = self._item["lvl req"]
        self._ilvl = self._item["lvl"]
        self._name = self._item["index"]
        self._invPicture = self._item["invfile"]
        self._type = self._item["*type"]
        for x in range(1, 12):
            prop = Property(self._item["prop" + str(x)], self._item["par" + str(x)], self._item["min" + str(x)], self._item["max" + str(x)])
            if prop.prop is None:
                continue
            self._props.append(prop)
        print(self._name)
        PropertyParser.parse(self._props)

#class RuneWord:
#    def __init__(self):
        #nothing

print("Loading Item Types")
types = BaseParser.read(ItemType)
for type in types:
   if not type.isShield():
       if not type.isWeapon():
           if not type.isArmor():
               if type.code not in ['gold', 'bowq', 'xboq', 'play', \
                                    'time', 'herb', 'poti', 'elix', \
                                    'char', '', 'book', 'gem', 'torc', \
                                    'scro', 'tpot', 'ques', 'body', 'key', \
                                    'misc', 'sock', 'seco', 'misl', 'jewl', \
                                    'clas', 'amaz', 'barb', 'necr', 'assn', \
                                    'sorc', 'pala', 'drui', 'rune', 'hpot', \
                                    'mpot', 'rpot', 'spot', 'apot', 'wpot', \
                                    'scha', 'mcha', 'lcha', 'icha', 'h2h2', \
                                    'gem0', 'gem1', 'gem2', 'gem3', 'gem4', 'gem5', 'gem6',\
                                    'gema', 'gemd', 'gemt', 'gems', 'gemr', 'geme', 'gemz',\
                                    'stup', 'stus', 'rndr']:
                    t=2
print("Loading Skills")
skill = BaseParser.read(Skill)
PropertyParser.setSkills(skill)
print("Loading Properties")
prop = BaseParser.read(PropertyParse)
PropertyParser.setValidProperties(prop)
print("Loading Monsters")
mon = BaseParser.read(MonStat)
PropertyParser.setMonsters(mon)
print("Loading Gems/Runes")
gems = BaseParser.read(Socketable, True)
print("Downloading Images")

print("Loading Runewords")
items = BaseParser.read(Runeword)
itemAggregate = ParseAggregate(items, Runeword)

runes = [x for x in gems if x.isRune()]
byName = (lambda x: [rune for rune in runes if rune._code == x])
def replaceRunes(itemsAgg):
    for i, item in enumerate(itemsAgg.items):
        for j, rune in enumerate(item.runes):
            itemsAgg.items[i].runes[j] = byName(rune)[0]._letter
byCode = (lambda x: [type for type in types if type.code == x])
def replaceItems(itemsAgg):
    for i, item in enumerate(itemsAgg.items):
        for j, type in enumerate(item.itypes):
            itemsAgg.items[i].itypes[j] = byCode(type)[0]

replaceRunes(itemAggregate)
replaceItems(itemAggregate)
itemAggregate.parse(runes)

itemAggregate.writeJSON()
d = 2
