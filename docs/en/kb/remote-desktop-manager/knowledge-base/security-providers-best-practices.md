---
title: Security Providers Best Practices
---
***Security Providers*** exist to encrypt the data at rest (the information stored on the database) using a key shared on every {{ en.RDM }} instance. This way, an attacker need to compromise the database and the security provider in order to compromise the data.  

The list of ***Security type*** is:  

* ***Default*** : Obfuscate the data  
* ***Shared passphrase*** : Encrypts the data using a password stored on each {{ en.RDM }} instances.  
* ***Certificate*** : Encrypts the data using the private key of a certificate installed on each workstation.  
![!!KB4972.png](/img/en/kb/KB4972.png)  

The best practice is to use a ***Certificate*** , once installed in the Windows Certificate store, it’s harder to retrieve the key and the key is not bound to a passphrase, which may be reused somewhere or simply be weak.  

However, this is not the typical use case for a certificate, so a lot of good practices around certificates don’t make sense here, mostly because it is not used as a means of verifying the identity of a server.  

For instance, in the case of an {{ en.RDM }} security provider, the certificate does not need to be trusted by a Certificate Authority and does not have to still be valid (regarding the expiration date) because those are controls used to verify authenticity. Also, in order to use it as a shared key, the certificate needs to have the same private key for each workstation.  

The good practice here is to generate a single self-signed RSA certificate and install it on every workstation that uses RDM.
