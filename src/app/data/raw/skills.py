import csv
import os
import re

import PropertyParser
from PropertyParser.property import Property, BaseParser
from utils import headerParse


class Skill(BaseParser):

    def __init__(self, line):
        self.skill = ""
        self.id = 0
        self.desc = ""
        self.char = ""

        BaseParser.__init__(self, line)

    def parse(self):
        self.skill = self.raw["skill"]
        self.id = self.raw["Id"]
        self.desc = self.raw["skilldesc"]
        self.char = self.raw["charclass"]

    def __str__(self):
        return "Name:{}, Id:{}, Description: {}, Char: {}".format(self.skill,self.id,self.desc,self.char)

    @staticmethod
    def getName():
        return "skills.csv"

