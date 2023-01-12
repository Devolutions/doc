---
title: Install Root Certificates
---
# {{ en.TOPICTITLE }} 
## Description 
Here are various procedures to install root certificates: 
[Windows]( 
[Linux]( 
[Exceptions for web browsers]( 
## Windows 
1. Open the Microsoft Management Console by searching for ***MMC*** in the ***Start*** menu. Another way is to press the Win+R keys on your keyboard and, in the ***Run*** window, search for ***MMC*** . 
2. Select ***File – Add/Remove Snap-in*** . 
3. In the ***Available snap-ins*** box, select ***Certificates*** . 
4. Click the ***Add*** button. 
5. In the wizard, select ***Computer Account*** , then click ***Next*** . 
6. Select ***Local computer*** , then click ***Finish*** to end the wizard 
7. Click ***OK*** to save your changes. This action will also close the ***Add or Remove Snap-ins*** dialog. 
8. In the console, select ***Certificates (Local Computer)*** . 
9. In the ***Logical Store Name*** box, right-click ***Trusted Root Certification Authorities*** and select ***All Tasks – Import*** . 
10. Follow the instructions in the ***Certificate Import Wizard*** and provide the certificate file you have. 
## Linux (ubuntu, debian) 
1. sudo mkdir /usr/local/share/ca-certificates/extra 
2. sudo cp ca.crt /usr/local/share/ca-certificates/extra/ca.crt 
3. sudo update-ca-certificates 
Watch for a 1 added in the output messages. 
## Exceptions for web browsers 
### windows 
Firefox does not trust the same certificates as Windows and a setting must be applied in order to enable this. 
Please consult [Mozilla&apos;s KB](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox) . 
### linux 
Both Firefox and Chrome use their own certificate trust stores. 
Please consult the same [Mozilla KB](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox) . 

