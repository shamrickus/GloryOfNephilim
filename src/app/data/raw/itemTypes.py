import csv
import os

import PropertyParser
from PropertyParser.property import Property, BaseParser


class ItemType(BaseParser):

    def __init__(self, line):
        self.name = ""
        self.code = {}
        self.equiv = {}
        self.equiv2 = {}
        BaseParser.__init__(self, line)
    def parse(self):
        self.name = self.raw["ItemType"]
        self.code = self.raw["Code"]
        self.equiv = self.raw["Equiv1"]
        self.equiv1 = self.raw["Equiv2"]

    def verify(self):
        return self.name != "None"

    @staticmethod
    def getName():
        return "ItemTypes.csv"

    def isShield(self):
        return self.code in ["shld", "shie", "boot", 'head', 'ashd', 'phlm', 'pelt', 'circ']

    def isWeapon(self):
        if self.code in ['club', 'mele', 'glov', 'scep', 'wand', 'staf', \
                         'bow', 'xbow', 'axe', 'swor', 'hamm', 'knif', \
                         'spear', 'pole', 'mace', 'tkni', 'taxe', 'jave', 'weap', \
                         'abow', 'aspe', 'ajav', 'mboq', 'mxbq'] \
                or self.equiv in ['weap', 'rod', 'mele', 'blun', 'comb']:
            return True
        return False

    def isArmor(self):
        if self.code in ['tors', 'ring', 'amul', 'belt', 'helm', 'armo', 'cloa']:
            return True
        return False

    def parseItems(self, itemAgg):
        d = 2

    def json(self):
        return "{}".format(self.name)

