import csv
import os
import inspect

def isdebugging():
  for frame in inspect.stack():
    if frame[1].endswith("pydevd.py"):
      return True
  return False

from src.app.data.raw import PropertyParser
from src.app.data.raw import skills
from src.app.data.raw.PropertyParser.property import Property, BaseParser


class Runeword(BaseParser):

    def __init__(self, line):
        self.name = ""
        self.complete = 0
        self.itypes = []
        self.etypes = []
        self.runes = []
        self.props = []
        BaseParser.__init__(self, line)
    def add(self, property):
        for prop in self.props:
            if prop.equiv(property):
                prop.add(property)
                return
        self.props.append(property)

    def parse(self):
        self.name = self.raw["RuneName"]
        self.complete = self.raw["complete"]
        for i in range(1, 8):
            if i < 4:
                if self.raw['etype' + str(i)] != '':
                    self.etypes.append(self.raw['etype' + str(i)])
            if i < 7:
                if self.raw['itype' + str(i)] != '':
                    self.itypes.append(self.raw["itype" + str(i)])
                if self.raw['Rune' + str(i)] != '':
                    self.runes.append(self.raw['Rune' + str(i)])
            if self.raw['T1Code' + str(i)] != '':
                self.props.append(Property(self.raw['T1Code' + str(i)], self.raw['T1Param' + str(i)],
                                           self.raw['T1Min' + str(i)], self.raw['T1Max' + str(i)]))
        if self.verify():
            if(isdebugging() or True):
                print(self.name)
            PropertyParser.parse(self.props)

    def verify(self):
        return self.name and self.complete == str(1)

    def format(self, list):
        return "[\"" + "\",\"".join(x for x in list) + "\"]"

    def json(self):
        runes = self.format([str(x) for x in self.runes])
        props = self.format([str(x.parsed) for x in self.props])
        types = self.format([x.json() for x in self.itypes])
        out = "{" + \
              "\"Name\":\"{}\",\"classRestriction\": null, \"Runes\":{},\"Version\":\"{}\",\"Properties\":{},\"Type\":{}".format(self.name, runes, "TEST", props, types) + \
              "}"

        return out


    @staticmethod
    def getName():
        return "runewords.csv"



