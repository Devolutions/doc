---
eleventyComputed:
  title: Configuration SSH pour la conformité de {{ fr.RDM }} à la norme FIPS 140-2
---
Pour que le client SSH de {{ fr.RDM }} soit conforme à l'annexe A de la norme FIPS 140-2, appliquer des modifications de configuration spécifiques dans les options de {{ fr.RDM }}.

{% snippet, "shieldNotice" %}
Pour être conforme, vous devez vous assurer que les algorithmes non conformes sont désactivés. Pour ce faire, vérifier que les cases qui ne sont PAS cochées dans les captures d'écran ci-dessous sont désactivées dans la configuration du client.
{% endsnippet %}

{% snippet, "shieldCaution" %}
Nous ne recommandons pas d'utiliser ces paramètres à moins que vous ne soyez dans un environnement nécessitant la conformité avec le FIPS 140-2. La plupart des utilisateurs devraient s'en tenir aux paramètres par défaut de {{ fr.RDM }} et activer des suites de chiffrement supplémentaires uniquement si requis par leurs serveurs.
{% endsnippet %}

{% snippet, "badgeHelp" %}
Ces valeurs proviennent de la documentation de Microsoft [norme FIPS140.2 annexe A](https://docs.microsoft.com/en-us/cpp/linux/set-up-fips-compliant-secure-remote-linux-development?view=msvc-160)
{% endsnippet %}

## Paramètres

1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Types – Terminal – Support d'Algorithme***.
1. Dans l'onglet ***Chiffrement***, décocher :
    * Chacha20 Poly1305 (openssh<area>.com)
    * Aes256 Gcm (openssh<area>.com)
    * Aes128 Gmc (openssh<area>.com)
    * Rijndael Cbc (lysator<area>.liu.se)
![!!KB4861](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4861.png)
1. Dans l'onglet ***Clé d'hôte***, décocher :
    * Ssh Ed25519
    * X509v3 Sign Rsa
    * X509v3 Sign Rsa Sha256 (ssh<area>.com)
    * Ssh Dss
![!!KB4862](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4862.png)
1. Dans l'onglet ***Kex***, décocher :
    * Curve25519 Sha256
    * Curve25519 Sha256 (libssh<area>.org)
    * Diffie Hellman Group16 Sha512
    * Diffie Hellman Group18 Sha512
    * Diffie Hellman Group14 Sha256
    * Diffie Hellman Group1 Sha1
![!!KB4863](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4863.png)
1. Dans l'onglet ***MAC***, décocher :
    * Hmac Sha 1 96
    * Hmac Md5 96
    * Hmac Md5
![!!KB4864](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4864.png)
1. Cliquer sur ***OK***.