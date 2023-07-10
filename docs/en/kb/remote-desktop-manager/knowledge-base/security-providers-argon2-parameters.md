---
eleventyComputed:
  title: Security Providers – Argon2 parameters
  description: In {{ en.RDM }}, the ***Shared passphrase (v3)*** for the ***Security Provider*** uses the Argon2id Key Derivation Function (KDF) to transform the passphrase into an encryption key.
---
In {{ en.RDM }}, the ***Shared passphrase (v3)*** for the ***Security Provider*** uses the Argon2id Key Derivation Function (KDF) to transform the passphrase into an encryption key.  

The ***Advanced*** menu is used to tune the derivation to make it easier or harder to compute.
![Administration – Security Provider – Shared passphrase (v3) - Advanced](https://webdevolutions.azureedge.net/docs/en/kb/KB5017.png)  

## Why make the derivation harder to compute?
Let’s say a malicious actor gets access to a computer enrolled in the provider. This attacker would have access to the encryption key used to decrypt the data on the database, but would not directly get access to the passphrase itself because of the derivation.  

What an attacker can do is try to recover the password by brute force, trying several passwords and matching the result with the key until they find a match. Making the hash slower to compute by a margin that is not noticeable to the legitimate users makes it a lot harder for an attacker to brute force the password back.  

{% snippet icon.badgeInfo %}
This derivation is only done once when enrolling an {{ en.RDM }} instance to the ***Security Provider***, so putting higher values here will not affect performance of regular everyday operations.
{% endsnippet %}  

## What are the different parameters?
* ***Iterations***: Commonly named the “time” parameter, it directly makes the key longer to compute. To prevent some attacks, it should be set to at least 2, but higher is better.
* ***Memory***: This is the number of kilobytes of RAM used by the algorithm. Raising this number makes the computation use more RAM and also makes it slower. This parameter exists because brute force is generally done on the GPU, which can compute a lot of derivations in parallel but has a relatively low amount of VRAM available. The idea of increasing the RAM usage is to bottleneck GPU brute force via the limited amount of VRAM available.
* ***Lanes***: This is the number of CPU cores, if available, that are going to be used for the derivation. Raising this will make the computation faster as long as you have enough CPU cores available to compute it.  

## What values should I use?
The defaults settings are good enough to prevent most brute force attacks. However, if you want to tune it yourself, you can follow these steps using the ***Test*** button to see how long it would take to compute the key:  

1. Set the ***Lanes*** parameter to the number of CPU cores of the PC with the fewer cores that is going to connect to the database. For instance, if the computers you use to access the database have 2, 4, or 8 cores, set ***Lanes*** to 2.
1. Set ***Iterations*** to 2 for now.
1. Raise the ***Memory*** parameter as high as desired.
    * If you stop because you do not want to make it slower, you can skip step 4.
    * If you stop because you do not want to use more RAM, but you are willing to make the computation longer, continue to step 4.
4. Raise the ***Iterations*** parameter as high as desired before it becomes too slow.  
{% snippet icon.badgeHelp %}
For more information, refer to the following resources:  

* [Argon2: the memory-hard function for password hashing and other applications](https://www.password-hashing.net/argon2-specs.pdf)  
* [How to Choose the Right Parameters for Argon2](https://www.twelve21.io/how-to-choose-the-right-parameters-for-argon2/)
{% endsnippet %}
