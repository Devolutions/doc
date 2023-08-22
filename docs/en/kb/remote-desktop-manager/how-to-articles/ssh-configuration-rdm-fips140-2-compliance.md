---
eleventyComputed:
  title: SSH configuration for {{ en.RDM }}'s FIPS 140-2 Compliance
---
For the {{ en.RDM }} SSH client to be compliant with the FIPS 140-2 annex A standard, you need to apply specific configuration changes in {{ en.RDM }} options.

{% snippet icon.shieldNotice %}
To be compliant, you must ensure that non-compliant algorithms are disabled. To do this, you need to verify that the boxes that are NOT checked in the screenshots below are disabled in the client configuration.
{% endsnippet %}

{% snippet icon.shieldCaution %}
We do not recommend using these settings unless you are in an environment that requires compliance with the FIPS 140-2. Most users should stick to the default settings of {{ en.RDM }} and enable additional cipher suites only if required by their servers.
{% endsnippet %}

{% snippet icon.badgeHelp %}
These values originate from the Microsoft’s documentation [FIPS140.2 annex A standard](https://docs.microsoft.com/en-us/cpp/linux/set-up-fips-compliant-secure-remote-linux-development?view=msvc-160)
{% endsnippet %}

## Settings

1. In {{ en.RDM }}, go to ***File - Options - Types - Terminal - Algorithm Support***.
1. In the ***Cipher*** tab, uncheck:
    * Chacha20 Poly1305 (openssh<area>.com)
    * Aes256 Gcm (openssh<area>.com)
    * Aes128 Gmc (openssh<area>.com)
    * Rijndael Cbc (lysator<area>.liu.se)  
![!!KB4861.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4861.png)
1. In the ***Host key*** tab, uncheck:
    * Ssh Ed25519
    * X509v3 Sign Rsa
    * X509v3 Sign Rsa Sha256 (ssh<area>.com)
    * Ssh Dss  
![!!KB4862.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4862.png)
1. In the ***Kex*** tab, uncheck:
    * Curve25519 Sha256
    * Curve25519 Sha256 (libssh<area>.org)
    * Diffie Hellman Group16 Sha512
    * Diffie Hellman Group18 Sha512
    * Diffie Hellman Group14 Sha256
    * Diffie Hellman Group1 Sha1  
![!!KB4863.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4863.png)
1. In the ***MAC*** tab, uncheck:
    * Hmac Sha 1 96
    * Hmac Md5 96
    * Hmac Md5  
![!!KB4864.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4864.png)
1. Click ***OK***.
