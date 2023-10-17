---
eleventyComputed:
  title: Configure a aX.509 certificate credential entry type
  description: Learn how to configure an access code entry in Remote Desktop Manager
---

The aX.509 certificate credential entry type could be used to perform signing operations (code signing, document signing, etc.) from {{ en.RDM }}, depending on the type of certificate involved.

1. Add a new entry in {{ en.RDM }}.  
1. Go to ***Credential Management*** and select ***x.509 Certificate***.
![Add a x.509 Certificate entry](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6126_2023_3.png)  
1. Click ***OK***.
1. Choose the ***Name*** and ***Folder***.
1. Under ***General***, select [***Stored in database***](kb/remote-desktop-manager/knowledge-base/configure-x509-certificate-credential-entry-type/#stored-in-database) or [***Link to certificate store***](kb/remote-desktop-manager/knowledge-base/configure-x509-certificate-credential-entry-type/#link-to-certificate-store) in the ***Certificate data mode*** drop-down menu.
![Stored in database and Link to certificate store](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6130_2023_3.png)  

## Stored in database

1. Select ***Update Certificate*** under ***General*** – ***Embedded x509 Certificate*** to import a x.509 Certificate.
![Update Certificate](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6131_2023_3.png) 
1. Choose the ***Certificate file***.
1. Click ***Next***.
![Choose the Certificate file](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6132_2023_3.png) 
1. Choose a ***Private key file*** if needed.
1. Click ***Next***.
![Private key file](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6133_2023_3.png) 
1. Click ***Finish*** to close the window.
![The certificate is ready to import](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6134_2023_3.png) 
1. Select ***View Certificate*** to view certificate information and install the certificate.
1. In the ***Certificate window***, click ***Install Certificate***.
![Certificate window](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6135_2023_3.png) 
1. Select the ***Store Location***: ***Current User*** or ***Local Machine***.
1. Click ***Next***.
![Current User or Local Machine](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6136_2023_3.png) 
1. Choose the ***Certificate store***.
1. Click ***Next***.
![Choose the Certificate store](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6137_2023_3.png) 
1. Click ***Finish*** to complete the import.
![Completing the Certificate Import Wizard window](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6138_2023_3.png)
1. Select the ***PIN*** of the ***Smart Card*** if needed.
![Smart Card](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6140_2023_3.png)
1. Click ***Add*** to save the entry 

## Link to certificate store

1. Select ***Current user*** or ***Local machine*** under ***Certificate location***. 
![Certificate location](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6141_2023_3.png)
1. Choose the ***Certificate Store*** in the drop-down menu.
![Certificate Store](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6142_2023_3.png)
1. Choose Thumbprint or Subject name in ***Certificate find type***.
![Certificate find type](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6143_2023_3.png) 
1. Enter the ***Search text***.
1. Click ***Test Configuration***
![Search text and Test Configuration](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6144_2023_3.png)
1. Select the ***PIN*** of the ***Smart Card*** if needed.
![Smart Card](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6140_2023_3.png)
1. Click ***Add*** to save the entry. 
