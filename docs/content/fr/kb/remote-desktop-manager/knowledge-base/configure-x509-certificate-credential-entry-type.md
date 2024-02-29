---
eleventyComputed:
  title: Configure a aX.509 certificate credential entry type
  description: Learn how to configure an access code entry in Remote Desktop Manager
---
The ***aX.509 certificate credential entry type*** facilitate RDP Smart Card authentication, and stores the full X.509 certificate (public and private portion) for insertion into an RDP virtual Smart Card.

Some organizations use X.509 certificates as as alternative to authenticating with user IDs and passwords. X.509 certificates leverage public-private key cryptography, and are widely seen as an enhanced safeguard against malicious network impersonators. 

1. Add a new entry in {{ en.RDM }}.  
1. Go to ***Credential Management*** and select ***x.509 Certificate***.
![Add a x.509 Certificate entry](https://cdnweb.devolutions.net/docs/en/kb/KB2362.png)  
1. Click ***OK***.
1. Choose the ***Name*** and ***Folder***.
1. Under ***General***, select [***Stored in database***](https://docs.devolutions.net/kb/remote-desktop-manager/knowledge-base/configure-x509-certificate-credential-entry-type/#stored-in-database) or [***Link to certificate store***](https://docs.devolutions.net/kb/remote-desktop-manager/knowledge-base/configure-x509-certificate-credential-entry-type/#link-to-certificate-store) in the ***Certificate data mode*** drop-down menu.
![Stored in database and Link to certificate store](https://cdnweb.devolutions.net/docs/en/kb/KB2344.png)  

## Stored in database

1. Select ***Update Certificate*** under ***General*** – ***Embedded x509 Certificate*** to import a x.509 Certificate.
![Update Certificate](https://cdnweb.devolutions.net/docs/en/kb/KB2345.png) 
1. Choose the ***Certificate file***.
1. Click ***Next***.
![Choose the Certificate file](https://cdnweb.devolutions.net/docs/en/kb/KB2346.png) 
1. Choose a ***Private key file*** if needed.
1. Click ***Next***.
![Private key file](https://cdnweb.devolutions.net/docs/en/kb/KB2347.png) 
1. Click ***Finish*** to close the window.
![The certificate is ready to import](https://cdnweb.devolutions.net/docs/en/kb/KB2348.png) 
1. Select ***View Certificate*** to view certificate information and install the certificate.
1. In the ***Certificate window***, click ***Install Certificate***.
![Certificate window](https://cdnweb.devolutions.net/docs/en/kb/KB2349.png) 
1. Select the ***Store Location***: ***Current User*** or ***Local Machine***.
1. Click ***Next***.
![Current User or Local Machine](https://cdnweb.devolutions.net/docs/en/kb/KB2350.png) 
1. Choose the ***Certificate store***.
1. Click ***Next***.
![Choose the Certificate store](https://cdnweb.devolutions.net/docs/en/kb/KB2351.png) 
1. Click ***Finish*** to complete the import.
![Completing the Certificate Import Wizard window](https://cdnweb.devolutions.net/docs/en/kb/KB2352.png)
1. Select the ***PIN*** of the ***Smart Card*** if needed.
1. Click ***Add***.
![Smart Card](https://cdnweb.devolutions.net/docs/en/kb/KB2353.png)  
The entry is saved.

## Link to certificate store

1. Select ***Current user*** or ***Local machine*** under ***Certificate location***. 
![Certificate location](https://cdnweb.devolutions.net/docs/en/kb/KB2354.png)
1. Choose the ***Certificate Store*** in the drop-down menu.
![Certificate Store](https://cdnweb.devolutions.net/docs/en/kb/KB2355.png)
1. Choose ***Thumbprint*** or ***Subject name*** in ***Certificate find type***.
![Certificate find type](https://cdnweb.devolutions.net/docs/en/kb/KB2356.png) 
1. Enter the ***Search text***.
1. Click ***Test Configuration***.
![Search text and Test Configuration](https://cdnweb.devolutions.net/docs/en/kb/KB2357.png)
1. Select the ***PIN*** of the ***Smart Card*** if needed.
1. Click ***Add***.
![Smart Card](https://cdnweb.devolutions.net/docs/en/kb/KB2353.png)  
The entry is saved.
