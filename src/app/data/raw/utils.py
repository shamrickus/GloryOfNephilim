import re
def headerParse(header):
    return re.sub(r'[^A-Za-z0-9]+', '', header)
