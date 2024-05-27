---
eleventyComputed:
  title: Configuration SSH pour la conformité de {{ fr.RDM }} avec FIPS 140-2
---
Il est nécessaire d’effectuer des changements de configuration bien précis dans les options de {{ fr.RDM }} pour s’assurer que le client SSH de {{ fr.RDM }} soit conforme avec l’annexe A de la norme FIPS 140-2.
{% snippet, "shieldNotice" %}
Pour être en conformité, il vous faudra d’abord désactiver les algorithmes non conformes. Pour ce faire, assurez-vous que les cases qui ne sont PAS cochées dans les captures d’écran ci-dessous soient également désactivées dans la configuration de votre client.
{% endsnippet %}

{% snippet, "shieldCaution" %}
L’utilisation de ces paramètres n’est conseillée que pour les environnements qui doivent être conformes à la norme FIPS 140-2. Il est recommandé d’utiliser les paramètres par défaut pour la plupart des utilisateurs {{ fr.RDM }} et d’activer des suites de chiffrement supplémentaires selon les besoins de leurs serveurs.
{% endsnippet %}

{% snippet, "badgeHelp" %}
Ces valeurs proviennent de la documentation de Microsoft concernant la norme [FIPS 140-2 annexe A](https://docs.microsoft.com/fr-ca/cpp/linux/set-up-fips-compliant-secure-remote-linux-development?view=msvc-160).
{% endsnippet %}

## Paramètres
1. Dans {{ fr.RDM }}, aller dans ***Fichier - Options - Types - Terminal - Prise en charge des algorithmes***.
1. Dans l'onglet ***Chiffrement***, décocher :
* Chacha20 Poly1305 (openssh<area><area>.com)
* Aes256 Gcm (openssh<area>.com)
* Aes128 Gmc (openssh<area>.com)
* Rijndael Cbc (lysator<area>.liu.se)
![!!KB2023](https://cdnweb.devolutions.net/docs/fr/kb/KB2023.png)
3. Dans l'onglet ***Clé de l'hôte***, décocher :
* Ssh Ed25519
* X509v3 Sign Rsa
* X509v3 Sign Rsa Sha256 (ssh<area>.com)
* Ssh Dss
![!!KB2024](https://cdnweb.devolutions.net/docs/fr/kb/KB2024.png)
4. Dans l'onglet ***Kex***, décocher :
* Curve25519 Sha256
* Curve25519 Sha256 (libssh<area>.org)
* Diffie Hellman Group16 Sha512
* Diffie Hellman Group18 Sha512
* Diffie Hellman Group14 Sha256
* Diffie Hellman Group1 Sha1
![!!KB2025](https://cdnweb.devolutions.net/docs/fr/kb/KB2025.png)
5. Dans l'onglet ***MAC***, décocher :
* Hmac Sha 1 96
* Hmac Md5 96
* Hmac Md5
![!!KB2026](https://cdnweb.devolutions.net/docs/fr/kb/KB2026.png)
6. Cliquer sur ***OK***.
