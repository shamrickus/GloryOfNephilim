from base64 import decodebytes
from subprocess import call
import paramiko, logging
import pysftp, sys, os, zipfile

print("Building")
call([os.path.join('.', 'node_modules', '.bin', 'ng'), 'build', '--prod'])
def zip(src, dst):
    zf = zipfile.ZipFile("%s.zip" % (dst), "w", zipfile.ZIP_DEFLATED)
    abs_src = os.path.abspath(src)
    for dirname, subdirs, files in os.walk(src):
        for filename in files:
            absname = os.path.abspath(os.path.join(dirname, filename))
            arcname = absname[len(abs_src) + 1:]
            zf.write(absname, arcname)
    zf.close()
print("Zipping")
zip('dist', 'dist')
logging.basicConfig(filename="./log.txt", level=logging.DEBUG)

pathToEnv='src/environments/environment.prod.ts'
zipFile = "dist.zip"
keydata = None
with open(pathToEnv, 'r') as file:
   for line in file.readlines():
      line = line.strip()
      tokens = line.split(": ")
      if(len(tokens) == 2):
          tokens[1] = tokens[1].replace("'","").replace(",",'')
          if(tokens[0] == "server"):
             srv = tokens[1]
          elif(tokens[0] == "user"):
             usr = tokens[1]
          elif(tokens[0] == 'pw'):
             pw = tokens[1]
          elif(tokens[0] == 'key'):
             keydata = bytes(tokens[1], 'utf-8')


cnopts = pysftp.CnOpts()
if keydata is not None:
    key = paramiko.RSAKey(data=decodebytes(keydata))
    cnopts.hostkeys.add(srv, 'ssh-rsa', key)
else:
    cnopts.hostkeys = None

print("Uploading dist")
with  pysftp.Connection(host=srv, username=usr,password=pw, cnopts=cnopts) as sftp:
    with sftp.cd('/var/www'):
       sftp.put("dist.zip")

print("Updating server")
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy)
ssh.connect(hostname=srv, username=usr, password=pw)
stdin, stdout, stderr = ssh.exec_command("(cd /var/www; ./up.sh)", get_pty=True)

print("StdOut")
for line in iter(stdout.readline, ""):
    print(line, end="")
print("StdErr")
for line in iter(stderr.readline, ""):
    print(line, end="")

